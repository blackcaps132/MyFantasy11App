import React, { useState, useEffect } from "react";
import { Button, Col, Container, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";
import SelectUserTeam from "./SelectUserTeam";

function NewContest() {
  const [sports, setSports] = useState([]);
  const [selectedSportId, setSelectedSportId] = useState(null);
  const [contests, setContests] = useState([]);
  const [selectedContest, setSelectedContest] = useState(null);
  const [showSelectUserTeam, setShowSelectUserTeam] = useState(false);

  // Load sports from backend
  useEffect(() => {
    axios
      .get(`${base_url}/Sports/Show`)
      .then((response) => {
        setSports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sports:", error);
      });
  }, []);

  // Load contests for selected sport
  useEffect(() => {
    if (selectedSportId) {
      axios
        .get(`${base_url}/Admin/Contests/Show/${selectedSportId}`)
        .then((response) => {
          setContests(response.data);
        })
        .catch((error) => {
          console.error("Error fetching contests:", error);
        });
    }
  }, [selectedSportId]);

  const handleSportSelect = (e) => {
    setSelectedSportId(e.target.value);
    setSelectedContest(null); // Reset selected contest when sport changes
  };

  const handleContestSelect = (e) => {
    const contestId = e.target.value;
    const contest = contests.find((contest) => contest.contestId === parseInt(contestId));
    setSelectedContest(contest);
  };

  return (
    <Container fluid className="mt-5 mb-3">
      <FormGroup>
        <Label for="sportSelect">Select the Sport</Label>
        <Col>
          <Input
            id="sportSelect"
            name="select"
            type="select"
            onChange={handleSportSelect}
          >
            <option value="">Select a Sport</option>
            {sports.map((sport) => (
              <option key={sport.sportId} value={sport.sportId}>
                {sport.sportName}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>

      {contests.length > 0 && (
        <FormGroup>
          <Label for="contestSelect">Select the Contest</Label>
          <Col>
            <Input
              id="contestSelect"
              name="select"
              type="select"
              onChange={handleContestSelect}
            >
              <option value="">Select a Contest</option>
              {contests.map((contest) => (
                <option key={contest.contestId} value={contest.contestId}>
                  {contest.team1.teamName} vs {contest.team2.teamName}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
      )}

      {selectedContest && (
        <div>
          <h3>
            {selectedContest.team1.teamName} vs {selectedContest.team2.teamName}
          </h3>
          <p>Sport: {selectedContest.sports.sportName}</p>
          <p>Prize Money: {selectedContest.prizeMoney}</p>
          <p>Joining Fees: {selectedContest.joiningFees}</p>
          <p>Date:{new Date(selectedContest.date).toLocaleDateString("en-GB")}</p>
        </div>
      )}

      <Button
        onClick={() => setShowSelectUserTeam(true)}
        outline
        color="primary"
        disabled={!selectedContest}
      >
        Proceed
      </Button>

      {showSelectUserTeam && selectedContest && (
        <SelectUserTeam contest={selectedContest} />
      )}
    </Container>
  );
}

export default NewContest;
