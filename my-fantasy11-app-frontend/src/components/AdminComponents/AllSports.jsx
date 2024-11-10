import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../../api/bootapi"; // Assuming you have a base_url configuration

function AllSports() {
  const [sports, setSports] = useState([]);
  const [modal, setModal] = useState(false);
  const [addSportModal, setAddSportModal] = useState(false);
  const [currentSport, setCurrentSport] = useState({
    sportId: "",
    sportName: "",
    teamSize: "",
  });

  // Fetch sports data from the server
  useEffect(() => {
    axios
      .get(`${base_url}/Sports/Show`)
      .then((response) => {
        setSports(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sports:", error);
        toast.error("Error fetching sports data.");
      });
  }, []);

  // Toggle the update modal
  const toggle = () => setModal(!modal);

  // Toggle the add sport modal
  const toggleAddSport = () => setAddSportModal(!addSportModal);

  // Open update modal with selected sport data
  const handleUpdateClick = (sport) => {
    setCurrentSport(sport);
    toggle(); // Open the update modal
  };

  // Handle sport update form submission
  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    // Send PUT request to update the sport
    axios
      .put(`${base_url}/Sports/Update`, currentSport)
      .then((response) => {
        toast.success("Sport updated successfully!");
        setSports((prevSports) =>
          prevSports.map((sport) =>
            sport.sportId === currentSport.sportId ? currentSport : sport
          )
        );
        toggle(); // Close the modal after submission
      })
      .catch((error) => {
        console.error("Error updating sport:", error);
        toast.error("Error updating sport.");
      });
  };

  // Handle sport deletion
  const handleDeleteClick = (sportId) => {
    axios
      .delete(`${base_url}/Sports/delete/${sportId}`)
      .then(() => {
        toast.success("Sport deleted successfully!");
        setSports((prevSports) => prevSports.filter((sport) => sport.sportId !== sportId));
      })
      .catch((error) => {
        console.error("Error deleting sport:", error);
        toast.error("Error deleting sport.");
      });
  };

  // Handle Add Sport form submission
  const handleAddSportSubmit = (e) => {
    e.preventDefault();

    // Get the highest sportId in the list and increment it by 1
    const highestSportId = sports.reduce((maxId, sport) => {
      return sport.sportId > maxId ? sport.sportId : maxId;
    }, 0);

    const newSport = {
      sportId: highestSportId + 1, // Increment the highest ID by 1
      sportName: currentSport.sportName,
      teamSize: currentSport.teamSize,
    };

    // Log the object being sent to the backend
    console.log("Adding Sport:", newSport);

    // Send POST request to add the sport
    axios
      .post(`${base_url}/Sports/Add`, newSport)
      .then((response) => {
        toast.success("Sport added successfully!");

        // Check the response and add the sport to the list
        console.log("Added Sport Response:", response.data);
        setSports((prevSports) => [...prevSports, response.data]); // Add the new sport to the list
        setCurrentSport({ sportId: "", sportName: "", teamSize: "" }); // Reset form fields
        setAddSportModal(false); // Close the modal after submission
      })
      .catch((error) => {
        console.error("Error adding sport:", error);
        toast.error("Error adding sport.");
      });
  };

  return (
    <Container fluid className="my-4">
      <Button className="my-3" color="warning" onClick={toggleAddSport}>
        Add a sport
      </Button>
      <h1>All sports</h1>
      <Table striped hover responsive style={{ fontSize: 20 }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Sport</th>
            <th>Squad Size</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sports.map((sport, index) => (
            <tr key={sport.sportId}>
              <th scope="row">{index + 1}</th>
              <td>{sport.sportName}</td>
              <td>{sport.teamSize}</td>
              <td>
                <Button outline color="success" onClick={() => handleUpdateClick(sport)}>
                  Update
                </Button>
              </td>
              <td>
                <Button outline color="danger" onClick={() => handleDeleteClick(sport.sportId)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Sport Modal */}
      <Modal isOpen={addSportModal} toggle={toggleAddSport}>
        <ModalHeader toggle={toggleAddSport}>Add New Sport</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleAddSportSubmit}>
            <FormGroup>
              <Label for="sportName">Sport Name</Label>
              <Input
                type="text"
                name="sportName"
                id="sportName"
                value={currentSport.sportName}
                onChange={(e) => setCurrentSport({ ...currentSport, sportName: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="teamSize">Squad Size</Label>
              <Input
                type="number"
                name="teamSize"
                id="teamSize"
                value={currentSport.teamSize}
                onChange={(e) => setCurrentSport({ ...currentSport, teamSize: e.target.value })}
                required
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Add Sport
            </Button>
          </Form>
        </ModalBody>
      </Modal>

      {/* Update Sport Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Sport</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleUpdateSubmit}>
            <FormGroup>
              <Label for="sportName">Sport Name</Label>
              <Input
                type="text"
                name="sportName"
                id="sportName"
                value={currentSport.sportName}
                onChange={(e) => setCurrentSport({ ...currentSport, sportName: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="teamSize">Squad Size</Label>
              <Input
                type="number"
                name="teamSize"
                id="teamSize"
                value={currentSport.teamSize}
                onChange={(e) => setCurrentSport({ ...currentSport, teamSize: e.target.value })}
                required
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Update Sport
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default AllSports;
