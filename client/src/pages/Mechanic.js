import React, { useEffect, useState } from "react";
import axios from "axios";
import MechanicForm from "../components/MechanicForm";
import MechanicList from "../components/MechanicList";

const Mechanic = "http://localhost:8000/mechanics";

export default function MechanicPage() {
  const [mechanics, setMechanics] = useState([]);

  const onDelete = (id) => {
    axios
      .delete(`${Mechanic}/${id}`)
      .then((response) => {
        console.log("Mechanic deleted:", response.data);
        fetchMechanics();
      })
      .catch((error) => {
        console.error("Error deleting mechanic:", error);
      });
  };

  const onEdit = (id, formData) => {
    axios
      .put(`${Mechanic}/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Mechanic updated:", response.data);
        fetchMechanics();
      })
      .catch((error) => {
        console.error("Error updating mechanic:", error);
      });
  };

  const fetchMechanics = () => {
    axios
      .get(Mechanic)
      .then((response) => {
        console.log("Mechanics fetched:", response.data);
        setMechanics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mechanics:", error);
      });
  };

  const addMechanics = (formData) => {
    axios
      .post(Mechanic, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Mechanic added:", response.data);
        fetchMechanics();
      })
      .catch((error) => {
        console.error("Error adding mechanic:", error);
      });
  };

  useEffect(() => {
    fetchMechanics();
  }, []);

  return (
    <div>
      <MechanicList mechanics={mechanics} onDelete={onDelete} onEdit={onEdit} />
      <MechanicForm onSubmit={addMechanics} />
    </div>
  );
}
