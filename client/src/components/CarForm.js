import React, { useState } from "react";

const CarForm = () => {
  const initialFormData = {
    make: "",
    model: "",
    color: "",
    year: "",
    plateNumber: "",
    fault: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    setFormData(initialFormData);
  };

  return (
    <div style={{ margin: "100px" }}>
      <h2 className="ui dividing header">Car Form</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>Make</label>
            <input
              type="text"
              name="make"
              placeholder="Car Make"
              value={formData.make}
              onChange={handleChange}
            />
          </div>
          <div className="twelve wide field">
            <label>Model</label>
            <input
              type="text"
              name="model"
              placeholder="Car Model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <label>Color</label>
            <input
              type="text"
              name="color"
              placeholder="Car Color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Year</label>
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Plate Number</label>
            <input
              type="text"
              name="plateNumber"
              placeholder="Car Plate Number"
              value={formData.plateNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label>Fault</label>
          <textarea
            rows={3}
            name="fault"
            placeholder="Describe the fault"
            value={formData.fault}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="ui button primary">
          Add New Car
        </button>
      </form>
    </div>
  );
};

export default CarForm;
