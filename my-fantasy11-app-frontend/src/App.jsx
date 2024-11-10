import { Container, Button } from "reactstrap";
import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


import AdminHome from "./components/AdminComponents/AdminHome";
import UserHome from "./components/UserComponents/UserHome";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [HomeSelector, setHomeSelector] = useState(0);

  const HomeHandler = (num, path) => {
    setHomeSelector(num); // Update HomeSelector
    navigate(path); // Navigate to the specified path
  };

  return (
    <Container fluid>
      <Header /> {/* Move Header outside the condition so it appears on all pages */}
      <ToastContainer/>
      {/* Show buttons only when HomeSelector is 0 */}
      {HomeSelector === 0 && (
        <div className="text-center fluid" style={{ padding: 10 }}>
          <Button
            onClick={() => HomeHandler(1, "/admin")}
            outline
            color="success"
            className="mx-5"
            style={{ marginTop: 150 }}
          >
            Login as Admin
          </Button>
          <Button
            onClick={() => HomeHandler(2, "/user")}
            outline
            color="success"
            style={{ marginTop: 150 }}
          >
            Login as User
          </Button>
        </div>
      )}

      {/* Conditionally render AdminHome or UserHome based on HomeSelector */}
      {HomeSelector === 1 && <AdminHome />}
      {HomeSelector === 2 && <UserHome />}
    </Container>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/*" element={<AdminHome />} />
        <Route path="/user/*" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}
