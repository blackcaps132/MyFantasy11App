import React from "react";
import Body from "./Body";
import { Container } from "reactstrap";
import Header from "../Header";

function UserHome() {
  return (
    <Container fluid>
      <Header />
      <Body />
    </Container>
  );
}

export default UserHome;
