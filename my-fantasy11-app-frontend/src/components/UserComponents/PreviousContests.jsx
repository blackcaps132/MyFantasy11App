import React, { useState } from "react";
import { Table } from "reactstrap";
import ShowUserTeam from "./showUserTeam";

const PreviousContests = () => {
  const [selectedTeam, setSelectedTeam] = useState("");

  const contests = [
    {
      id: 1,
      date: "2024-10-10",
      userTeamId: "1",
      team1: "Team A",
      team2: "Team B",
      prizeMoney: "$500",
      status: "Won",
    },
    {
      id: 2,
      date: "2024-09-30",
      userTeamId: "2",
      team1: "Team C",
      team2: "Team D",
      prizeMoney: "$300",
      status: "Lost",
    },
    {
      id: 3,
      date: "2024-08-15",
      userTeamId: "3",
      team1: "Team E",
      team2: "Team F",
      prizeMoney: "$1000",
      status: "Won",
    },
  ];

  // Handle click event for userTeamId
  const handleClick = (userTeamId) => {
    setSelectedTeam(userTeamId);
  };

  // Function to reset selected team and go back to the contest table
  const goBack = () => {
    setSelectedTeam("");
  };

  return (
    <div className="container my-4">
      {selectedTeam ? (
        <ShowUserTeam userTeamId={selectedTeam} goBack={goBack} />
      ) : (
        <>
          <h2 className="text-center">Previous Contests</h2>
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>User Team ID</th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Prize Money</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contests.map((contest, index) => (
                <tr key={contest.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{contest.date}</td>
                  <td>
                    <span
                      style={{ cursor: "pointer", color: "blue" }}
                      onClick={() => handleClick(contest.userTeamId)}
                    >
                      {contest.userTeamId}
                    </span>
                  </td>
                  <td>{contest.team1}</td>
                  <td>{contest.team2}</td>
                  <td>{contest.prizeMoney}</td>
                  <td>{contest.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default PreviousContests;
