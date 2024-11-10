import React from "react";
import { Container, Row, Col, ListGroup } from "reactstrap";
import NewContest from "./NewContest";
import { Link, Routes, Route } from "react-router-dom"; 
import PreviousContests from "./PreviousContests";

function Body() {
  return (
    <div style={{ padding: 10, marginTop: 5 }}>
      <Container fluid>
        <Row>
          <Col md="4">
            <ListGroup>
              <Link
                to="ParticipateInNewContest"
                className="list-group-item list-group-item-action"
              >
                Participate in Contest
              </Link>
              <Link
                to="PreviousContests"
                className="list-group-item list-group-item-action"
              >
                Previous Contests
              </Link>
              <Link
                to="wallet"
                className="list-group-item list-group-item-action"
              >
                Wallet
              </Link>
            </ListGroup>
          </Col>
          <Col md="8" className="text-center" style={{ border: "2px solid lightgrey" }}>
            <Routes>
              <Route path="ParticipateInNewContest" element={<NewContest />} />
              <Route path="PreviousContests" element={<PreviousContests />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
