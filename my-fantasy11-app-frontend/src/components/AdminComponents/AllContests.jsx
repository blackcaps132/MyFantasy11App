import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "reactstrap";
import AddContest from "./AddContest";
import base_url from "../../api/bootapi";
import axios from "axios";

function AllContests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    axios
      .get(`${base_url}/Admin/Contests/Show`)
      .then((response) => {
        setContests(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching contests:", error);
      });
  }, []);

  const [showAddContest, setShowAddContest] = useState(false);

  const handleAddContest = (newContest) => {
    // setContests((prevContests) => [
    //   ...prevContests,
    //   { ...newContest, id: prevContests.length + 1 },
    // ]);
    setShowAddContest(false);
  };

  return (
    <Container fluid className="my-4">
      <Button
        className="my-3"
        color="warning"
        onClick={() => setShowAddContest(!showAddContest)}
      >
        Add Contest
      </Button>
      {showAddContest && <AddContest onAdd={handleAddContest} />}

      <h1>All contests</h1>
      <Table striped hover responsive style={{ fontSize: 12 }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Sport</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Prize Money</th>
            
          </tr>
        </thead>
        <tbody>
          {contests.map((contest, index) => (
            <tr key={contest.contestId}>
              <th scope="row">{index + 1}</th>
              <td>{new Date(contest.date).toLocaleDateString("en-GB")}</td>
              <td>{contest.sports.sportName}</td>
              <td>{contest.team1.teamName}</td>
              <td>{contest.team2.teamName}</td>
              <td>{contest.prizeMoney}</td>
             
              
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AllContests;
