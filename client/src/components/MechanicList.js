import React from "react";

const MechanicList = ({ mechanics, onEdit, onDelete }) => {
  return (
    <div style={{ margin: "100px" }}>
      <h2>Mechanic List</h2>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Expert Domain</th>
            <th>Experience (years)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mechanics && mechanics.length > 0 ? (
            mechanics.map((mechanic, index) => (
              <tr key={index}>
                <td data-label="Name">
                  {mechanic.firstName} {mechanic.middleName} {mechanic.lastName}
                </td>
                <td data-label="Expert Domain">{mechanic.speciality}</td>
                <td data-label="Experience">{mechanic.experience}</td>
                <td data-label="Actions">
                  <button className="ui button" onClick={() => onEdit(index)}>
                    Edit
                  </button>
                  <button
                    className="ui button red"
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
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

export default MechanicList;
