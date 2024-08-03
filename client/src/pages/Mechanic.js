import React, { useEffect, useState } from "react";
import axios from "axios";
import MechanicForm from "../components/MechanicForm";
import MechanicList from "../components/MechanicList";
export default function MechanicPage() {
  const [mechanics, setMechanics] = useState([]);

  const onDelete = (id) => {
    // Send a DELETE request to the server to delete the mechanic with the given id
    axios
      .delete(`http://localhost:8000/mechanics/${id}`)
      .then((response) => {
        // Handle the response data after the mechanic is deleted
        console.log("Mechanic deleted:", response.data);
        // Refresh the mechanic list by fetching the updated data
        fetchMechanics();
      })
      .catch((error) => {
        console.error("Error deleting mechanic:", error);
      });
  };

  const onEdit = (id, updatedMechanic) => {
    // Send a PUT request to the server to update the mechanic with the given id
    axios
      .put(`http://localhost:8000/mechanics/${id}`, updatedMechanic)
      .then((response) => {
        // Handle the response data after the mechanic is updated
        console.log("Mechanic updated:", response.data);
        // Refresh the mechanic list by fetching the updated data
        fetchMechanics();
      })
      .catch((error) => {
        console.error("Error updating mechanic:", error);
      });
  };

  const fetchMechanics = () => {
    // Fetch the mechanics from the server
    axios
      .get("http://localhost:8000/mechanics")
      .then((response) => {
        // Handle the response data
        console.log("Mechanics fetched:", response.data);
        // Update the mechanics state with the fetched data
        setMechanics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mechanics:", error);
      });
  };

  // Fetch the mechanics when the component mounts
  useEffect(() => {
    fetchMechanics();
  }, []);

  return (
    <div>
      <MechanicList mechanics={mechanics} onDelete={onDelete} onEdit={onEdit} />
      <MechanicForm />
    </div>
  );
}
