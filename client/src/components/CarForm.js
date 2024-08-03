import React, { useState, useEffect } from "react";
import { Modal } from "semantic-ui-react";

const CarForm = ({ onSubmit, data = {}, isOpen, onClose }) => {
  const initialFormData = {
    make: data.make || "",
    model: data.model || "",
    color: data.color || "",
    year: data.year || "",
    plateNumber: data.plateNumber || "",
    fault: data.fault || "",
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
      <Modal.Header>{data.id ? "Edit Car" : "Add a New Car"}</Modal.Header>
      <Modal.Content>
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
                required
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
                required
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
                required
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
                required
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
                required
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
              required
            />
          </div>
          <button type="submit" className="ui button primary">
            {data.id ? "Update Car" : "Add Car"}
          </button>
        </form>
      </Modal.Content>
    </Modal>
  );
};

export default CarForm;
