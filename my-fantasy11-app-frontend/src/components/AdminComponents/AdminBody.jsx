import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "reactstrap";
import { Link, Route, Routes } from "react-router-dom";
import AllContests from "./AllContests";
import AllSports from "./AllSports";

function AdminBody() {
  const [menuNum, setMenuNum] = useState(1);

  return (
    <div style={{ padding: 10, marginTop: 5 }}>
      <Container fluid>
        <Row>
          <Col md="2">
            <ListGroup>
              <Link
                onClick={() => setMenuNum(1)}
                to="/admin/all-contests"
                className="list-group-item list-group-item-action"
              >
                All Contests
              </Link>
              <Link
                onClick={() => setMenuNum(2)}
                to="/admin/all-sports"
                className="list-group-item list-group-item-action"
              >
                All Sports
              </Link>
              <Link
                onClick={() => setMenuNum(3)}
                to="/admin/all-teams"
                className="list-group-item list-group-item-action"
              >
                All Teams
              </Link>
              <Link
                onClick={() => setMenuNum(4)}
                to="/admin/all-users"
                className="list-group-item list-group-item-action"
              >
                All Users
              </Link>
            </ListGroup>
          </Col>
          <Col md="10" className="text-center" style={{ border: "2px solid lightgrey" }}>
            <Routes>
              <Route path="all-contests" element={<AllContests />} />
              <Route path="all-sports" element={<AllSports />} />
              <Route path="all-teams" element={<h1>All Teams</h1>} />
              <Route path="all-users" element={<h1>All Users</h1>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminBody;
