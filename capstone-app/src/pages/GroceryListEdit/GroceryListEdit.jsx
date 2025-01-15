import React, { useState } from "react";
import "./GroceryListEdit.scss";

function GroceryListEdit() {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Click edit to change this text!");

  // Handle when the edit button is clicked
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Handle when the save button is clicked
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  // Handle when the user types into the input
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="grocery-list-edit">
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="grocery-edit-input"
            autoFocus
          />
          <button
            onClick={handleSaveClick}
            className="save-button"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="view-container">
          <span className="grocery-edit-text">{text}</span>
          <button
            onClick={handleEditClick}
            className="edit-button"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default GroceryListEdit;
