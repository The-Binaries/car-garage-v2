import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";

const MechanicForm = ({ onSubmit, data = {}, isOpen, onClose }) => {
  const initialFormData = {
    firstName: data.firstName || "",
    middleName: data.middleName || "",
    lastName: data.lastName || "",
    speciality: data.speciality || "",
    experience: data.experience || "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData); // reset form data when modal opens with new data
  }, [data]);

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
    onClose(); // Close the modal after submitting
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>{data.id ? "Edit Mechanic" : "Add a New Mechanic"}</Modal.Header>
      <Modal.Content>
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <button type="submit" className="ui button primary">
            {data.id ? "Update Mechanic" : "Add Mechanic"}
          </button>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default MechanicForm;
