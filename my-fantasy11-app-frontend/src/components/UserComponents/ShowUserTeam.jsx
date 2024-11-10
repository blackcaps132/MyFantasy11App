import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";

const ShowUserTeam = ({ userTeamId, goBack }) => {
  const mockPlayers = [
    { id: 1, name: "Player 1", role: "Batter", rating: 85 },
    { id: 2, name: "Player 2", role: "Bowler", rating: 88 },
    { id: 3, name: "Player 3", role: "All-Rounder", rating: 90 },
    { id: 4, name: "Player 4", role: "Batter", rating: 82 },
    { id: 5, name: "Player 5", role: "Bowler", rating: 89 },
    { id: 6, name: "Player 6", role: "All-Rounder", rating: 92 },
    { id: 7, name: "Player 7", role: "Batter", rating: 83 },
    { id: 8, name: "Player 8", role: "Bowler", rating: 91 },
    { id: 9, name: "Player 9", role: "All-Rounder", rating: 88 },
    { id: 10, name: "Player 10", role: "Batter", rating: 87 },
    { id: 11, name: "Player 11", role: "Bowler", rating: 84 },
  ];

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPlayers(mockPlayers);
    }, 500);
  }, [userTeamId]);

  return (
    <div className="container my-4">
      {/* Back button */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 className="text-center">
          User Team Players for Team ID: {userTeamId}
        </h2>
        <Button color="danger" onClick={goBack}>
          &times; {/* X symbol */}
        </Button>
      </div>
      {players.length === 0 ? (
        <p>Loading players...</p>
      ) : (
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Role</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <th scope="row">{index + 1}</th>
                <td>{player.name}</td>
                <td>{player.role}</td>
                <td>{player.rating}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ShowUserTeam;
