import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Button, Row, Col, Input } from "reactstrap";
import axios from "axios";
import base_url from "../../api/bootapi";

function SelectUserTeam({ contest }) {
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamSize, setTeamSize] = useState(contest.sports.teamSize);

  // Load players for team1
  useEffect(() => {
    axios
      .get(`${base_url}/Players/show/${contest.team1.sportTeamId}`)
      .then((response) => {
        setTeam1Players(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players for team1:", error);
      });
  }, [contest]);

  // Load players for team2
  useEffect(() => {
    axios
      .get(`${base_url}/Players/show/${contest.team2.sportTeamId}`)
      .then((response) => {
        setTeam2Players(response.data);
      })
      .catch((error) => {
        console.error("Error fetching players for team2:", error);
      });
  }, [contest]);

  const handleSelectPlayer = (playerId) => {
    setSelectedPlayers(
      selectedPlayers.includes(playerId)
        ? selectedPlayers.filter((id) => id !== playerId)
        : [...selectedPlayers, playerId]
    );
  };

  const handlePayFees = () => {
    console.log("Selected player IDs: ", selectedPlayers);
  };

  const isTeamSizeMet = selectedPlayers.length === 11;

  return (
    <div className="container my-4">
      <h4>Team 1: {contest.team1.teamName}</h4>
      <Row>
        {team1Players.map((player) => (
          <Col md="4" key={player.playerId} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">{player.playerName}</CardTitle>
                <CardText>
                  {player.name}<br/>
                  Role: {player.category.categoryName} <br />
                  
                </CardText>
              </CardBody>
            </Card>
            <Input
              type="checkbox"
              className="form-check-input mx-2"
              id={`player-${player.playerId}`}
              checked={selectedPlayers.includes(player.playerId)}
              onChange={() => handleSelectPlayer(player.playerId)}
            />
            <label
              className="form-check-label"
              htmlFor={`player-${player.playerId}`}
            >
              Select Player
            </label>
          </Col>
        ))}
      </Row>

      <h4>Team 2: {contest.team2.teamName}</h4>
      <Row>
        {team2Players.map((player) => (
          <Col md="4" key={player.playerId} className="mb-4">
            <Card>
              <CardBody>
                <CardTitle tag="h5">{player.playerName}</CardTitle>
                <CardText>
                {player.name}<br/>
                  Role: {player.category.categoryName} <br />
                 
                </CardText>
              </CardBody>
            </Card>
            <Input
              type="checkbox"
              className="form-check-input mx-2"
              id={`player-${player.playerId}`}
              checked={selectedPlayers.includes(player.playerId)}
              onChange={() => handleSelectPlayer(player.playerId)}
            />
            <label
              className="form-check-label"
              htmlFor={`player-${player.playerId}`}
            >
              Select Player
            </label>
          </Col>
        ))}
      </Row>

      {isTeamSizeMet && (
        <div className="text-center mt-4">
          <Button color="success" onClick={handlePayFees}>
            Pay Fees
          </Button>
        </div>
      )}
    </div>
  );
}

export default SelectUserTeam;
