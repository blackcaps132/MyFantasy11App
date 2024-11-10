import React from "react";
import { Nav, NavLink, Container, Navbar, Card, CardBody } from "reactstrap";

function Header() {
  return (
    <Container fluid>
      <Card>
        <CardBody className="text-center bg-warning" style={{ color: "red" }}>
          <h1>Welcome to Fantasy11 App</h1>
        </CardBody>
      </Card>
      <Navbar
        style={{
          border: "2px solid blue",
          padding: "2",
          marginTop: 5,
          backgroundColor: "skyblue",
        }}
      >
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">About</NavLink>
          <NavLink href="/">Contact</NavLink>
        </Nav>
        {/* <Nav>
          <NavLink href="/">Login/Register</NavLink>
          <NavLink href="/">Admin</NavLink>
        </Nav> */}
      </Navbar>
    </Container>
  );
}
export default Header;
