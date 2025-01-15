import React, { useState } from "react";
import axios from "axios";
import "./GroceryListEdit.scss";
import icons from "../../assets/icons/edit-button.png";







function GroceryListEdit() {


 async function getAisleNumber(itemName) {
        try {
            const response = await axios.get("http://localhost:8080/items");
            const data = response.data;

            //find the item in the data based on the item_name
            const item = data.find((item) => item.item_name.toLowerCase() === itemName.toLowerCase());

            return item ? item.aisle_number : "Item not found in the list.";
        } catch (error) {
            console.error("error getting items:", error);
            return "Error getting aisle number.";
        }

    }




    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [aisleNumber, setAisleNumber] = useState("");

    const handleAddItem = async (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      const aisle = await getAisleNumber(inputValue.trim()); // Search for the aisle number
      setAisleNumber(aisle); // Set the aisle number state

      setItems([...items, { name: inputValue.trim(), aisle: aisle }]); // Add the new item with aisle number to the list
      setInputValue(""); // Clear input field
    }

    };


   




    return (
        <>
            <div className="grocery-edit">
                <h1 className="grocery-edit__title">New List 
                  <img className="grocery-edit__icon" src={icons} />  
                </h1>
            </div>

            <form className="grocery-edit__form" onSubmit={handleAddItem}>
                <input className="grocery-edit__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button className="grocery-edit__button" type="submit">Add</button>
            </form>

            <div className="grocery-edit__list">
                {items.map((item, index) => (
                  <div key={index} className="grocery-edit__list-item">
                    <p>{item.name} : {item.aisle}</p>
                </div>
                ))}
            </div>
        </>
    );


}

export default GroceryListEdit;