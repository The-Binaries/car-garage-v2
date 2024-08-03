import React, { useEffect, useState } from "react";
import axios from "axios";
import MechanicForm from "../components/MechanicForm";
import MechanicList from "../components/MechanicList";

const Mechanic = "http://localhost:8000/mechanics";

export default function MechanicPage() {
  const [mechanics, setMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const addMechanic = (formData) => {
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

  const updateMechanic = (formData) => {
    axios
      .put(`${Mechanic}/${selectedMechanic.id}`, formData, {
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

  const onEdit = (id) => {
    const mechanic = mechanics.find((m) => m.id === id);
    setSelectedMechanic(mechanic);
    setIsModalOpen(true);
  };

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

  const handleSubmit = (formData) => {
    if (selectedMechanic) {
      updateMechanic(formData);
    } else {
      addMechanic(formData);
    }
    setIsModalOpen(false);
    setSelectedMechanic(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMechanic(null);
  };

  useEffect(() => {
    fetchMechanics();
  }, []);

  return (
    <div>
      <MechanicList mechanics={mechanics} onDelete={onDelete} onEdit={onEdit} />
      <button style={{marginLeft: '7rem'}} className="ui button primary" onClick={() => setIsModalOpen(true)}>
        Add a New Mechanic
      </button>
      <MechanicForm
        onSubmit={handleSubmit}
        data={selectedMechanic || {}}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
