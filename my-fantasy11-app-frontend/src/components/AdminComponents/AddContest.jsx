import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import base_url from "../../api/bootapi";

const AddContest = ({ onAdd }) => {
  const navigate = useNavigate(); // Correctly use useNavigate for redirection

  const [sports, setSports] = useState([]);
  const [sportTeams, setSportTeams] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);
  const [selectedTeam1, setSelectedTeam1] = useState(null);
  const [selectedTeam2, setSelectedTeam2] = useState(null);
  const [prizeMoney, setPrizeMoney] = useState("");
  const [joiningFees, setJoiningFees] = useState("");
  const [date, setDate] = useState("");

  // Fetch sports data when component mounts
  useEffect(() => {
    axios
      .get(`${base_url}/Sports/Show`)
      .then((response) => {
        setSports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sports:", error);
        toast.error("Error fetching sports data.");
      });
  }, []);

  // Fetch sport teams when a sport is selected
  useEffect(() => {
    if (selectedSport) {
      axios
        .get(`${base_url}/SportTeams/show/${selectedSport}`)
        .then((response) => {
          setSportTeams(response.data);
        })
        .catch((error) => {
          console.error("Error fetching sport teams:", error);
          toast.error("Error fetching sport teams.");
        });
    }
  }, [selectedSport]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   

    // Convert date from dd-mm-yyyy to yyyy-MM-dd
    const formattedDate = formatDate(date);

    const contestData = {
      prizeMoney: prizeMoney,
      joiningFees: joiningFees,
      date: formattedDate,
      sports: {
        sportId: selectedSport,
        sportName: sports.find((sport) => sport.sportId === selectedSport)?.sportName,
      },
      team1: {
        sportTeamId: selectedTeam1,
        teamName: sportTeams.find((team) => team.sportTeamId === selectedTeam1)?.teamName,
      },
      team2: {
        sportTeamId: selectedTeam2,
        teamName: sportTeams.find((team) => team.sportTeamId === selectedTeam2)?.teamName,
      },
    };

    axios
      .post(`${base_url}/Admin/Contests/Add`, contestData)
      .then((response) => {
        toast.success("Contest added successfully!");
        onAdd(response.data); // Notify parent component to update the contests list
        navigate("/admin/all-contests"); // Redirect to AllContests page after adding the contest
      })
      .catch((error) => {
        console.error("Error adding contest:", error);
        toast.error("Error adding contest.");
      });
  };

  // Function to handle exclusion of selected teams from the second team list
  const availableTeamsForSecond = selectedTeam1
    ? sportTeams.filter((team) => team.sportTeamId !== selectedTeam1)
    : sportTeams;

  // Helper function to format date from dd-mm-yyyy to yyyy-MM-dd
  const formatDate = (inputDate) => {
    const parts = inputDate.split("-");
    if (parts.length === 3) {
      // Reorder the date to yyyy-mm-dd
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return inputDate; // Return input date if it's not in the expected format
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="prizeMoney">Prize Money</Label>
            <Input
              type="number"
              name="prizeMoney"
              id="prizeMoney"
              value={prizeMoney}
              onChange={(e) => setPrizeMoney(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="joiningFees">Joining Fees</Label>
            <Input
              type="number"
              name="joiningFees"
              id="joiningFees"
              value={joiningFees}
              onChange={(e) => setJoiningFees(e.target.value)}
              required
            />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="date">Date (dd-mm-yyyy)</Label>
            <Input
              type="text"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="dd-mm-yyyy"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="sport">Select Sport</Label>
            <Input
              type="select"
              name="sport"
              id="sport"
              value={selectedSport}
              onChange={(e) => setSelectedSport(e.target.value)}
              required
            >
              <option value="">Select a Sport</option>
              {sports.map((sport) => (
                <option key={sport.sportId} value={sport.sportId}>
                  {sport.sportName}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Col>
      </Row>

      {selectedSport && (
        <>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="team1">Select Team 1</Label>
                <Input
                  type="select"
                  name="team1"
                  id="team1"
                  value={selectedTeam1}
                  onChange={(e) => setSelectedTeam1(e.target.value)}
                  required
                >
                  <option value="">Select Team 1</option>
                  {sportTeams.map((team) => (
                    <option key={team.sportTeamId} value={team.sportTeamId}>
                      {team.teamName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="team2">Select Team 2</Label>
                <Input
                  type="select"
                  name="team2"
                  id="team2"
                  value={selectedTeam2}
                  onChange={(e) => setSelectedTeam2(e.target.value)}
                  required
                >
                  <option value="">Select Team 2</option>
                  {availableTeamsForSecond.map((team) => (
                    <option key={team.sportTeamId} value={team.sportTeamId}>
                      {team.teamName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </>
      )}

      <Button color="primary" type="submit">
        Add Contest
      </Button>
    </Form>
  );
};

export default AddContest;
