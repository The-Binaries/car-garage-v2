import React, { useState, useEffect } from "react";
import axios from "axios";

const MechanicList = ({ mechanics }) => {
  return (
    <div style={{ margin: "100px" }}>
      <h2>Mechanic List</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Expert Domain</th>
            <th>Experience (years)</th>
          </tr>
        </thead>
        <tbody>
          {mechanics && mechanics.length > 0 ? (
            mechanics.map((mechanic) => (
              <tr key={mechanic.id}>
                <td data-label="Name">
                  {mechanic.firstName} {mechanic.middleName} {mechanic.lastName}
                </td>
                <td data-label="Expert Domain">{mechanic.speciality}</td>
                <td data-label="Experience">{mechanic.experience}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No mechanics added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const CarList = ({ cars }) => {
  return (
    <div style={{ margin: "100px" }}>
      <h2>Car List</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Color</th>
            <th>Year</th>
            <th>Plate Number</th>
            <th>Fault</th>
          </tr>
        </thead>
        <tbody>
          {cars && cars.length > 0 ? (
            cars.map((car) => (
              <tr key={car.id}>
                <td data-label="Make">{car.make}</td>
                <td data-label="Model">{car.model}</td>
                <td data-label="Color">{car.color}</td>
                <td data-label="Year">{car.year}</td>
                <td data-label="Plate Number">{car.plateNumber}</td>
                <td data-label="Fault">{car.fault}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No cars added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default function Home() {
  const [mechanics, setMechanics] = useState([]);
  const [cars, setCars] = useState([]);

  const fetchMechanics = () => {
    axios
      .get("http://localhost:8000/mechanics")
      .then((response) => {
        console.log("Mechanics fetched:", response.data);
        setMechanics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mechanics:", error);
      });
  };

  const fetchCars = () => {
    axios
      .get("http://localhost:8000/cars")
      .then((response) => {
        console.log("Cars fetched:", response.data);
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  };

  useEffect(() => {
    fetchMechanics();
    fetchCars();
  }, []);

  return (
    <div className="">
      <MechanicList mechanics={mechanics} />
      <CarList cars={cars} />
    </div>
  );
}
