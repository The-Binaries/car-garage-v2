import React, { useState } from "react";

const MechanicForm = () => {
  const initialFormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    expertDomain: "",
    experience: "",
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
              name="expertDomain"
              placeholder="Expert Domain"
              value={formData.expertDomain}
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default MechanicForm;
