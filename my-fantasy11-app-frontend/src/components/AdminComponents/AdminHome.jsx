import React from "react";
import AdminBody from "./AdminBody";
import { Container } from "reactstrap";
import Header from "../Header";

function AdminHome() {
  return<Container fluid>
    
    <Header/>
    <AdminBody/>

  </Container>;
}

export default AdminHome;
