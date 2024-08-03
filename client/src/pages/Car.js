import React, { useEffect, useState } from "react";
import axios from "axios";
import CarForm from "../components/CarForm";
import CarList from "../components/CarList";

const CarsEndpoint = "http://localhost:8000/cars";

export default function CarPage() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCars = () => {
    axios
      .get(CarsEndpoint)
      .then((response) => {
        console.log("Cars fetched:", response.data);
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  };

  const addCar = (formData) => {
    axios
      .post(CarsEndpoint, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Car added:", response.data);
        fetchCars();
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  const updateCar = (formData) => {
    axios
      .put(`${CarsEndpoint}/${selectedCar.id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Car updated:", response.data);
        fetchCars();
      })
      .catch((error) => {
        console.error("Error updating car:", error);
      });
  };

  const onEdit = (id) => {
    const car = cars.find((c) => c.id === id);
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const onDelete = (id) => {
    axios
      .delete(`${CarsEndpoint}/${id}`)
      .then((response) => {
        console.log("Car deleted:", response.data);
        fetchCars();
      })
      .catch((error) => {
        console.error("Error deleting car:", error);
      });
  };

  const handleSubmit = (formData) => {
    if (selectedCar) {
      updateCar(formData);
    } else {
      addCar(formData);
    }
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div>
      <CarList cars={cars} onDelete={onDelete} onEdit={onEdit} />
      <button style={{marginLeft: '7rem'}} className="ui button primary" onClick={() => setIsModalOpen(true)}>
        Add a New Car
      </button>
      <CarForm
        onSubmit={handleSubmit}
        data={selectedCar || {}}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
