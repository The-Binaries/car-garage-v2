import React, { useState } from "react";

const MechanicForm = ({ onSubmit, data = { } }) => {
  const initialFormData = {
    firstName: data.firstName || "",
    middleName: data.middleName || "",
    lastName: data.lastName || "",
    speciality: data.speciality || "",
    experience: data.experience || "",
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
    onSubmit(formData);
  };

  return (
    <div style={{ margin: "100px" }}>
      <h2 className="ui dividing header">Mechanic Form</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="three fields">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Expert Domain</label>
            <input
              type="text"
              name="speciality"
              placeholder="Expert Domain"
              value={formData.speciality}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Experience (years)</label>
            <input
              type="number"
              name="experience"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="ui button primary">
          Add a new Mechanic
        </button>
      </form>
    </div>
  );
};

export default MechanicForm;
