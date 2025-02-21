import axios from "axios";
import icons from "../../assets/icons/edit-button.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GroceryList.scss";

const API_URL = import.meta.env.VITE_API_URL;

function GroceryList() {

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("New List");

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



 //get request of all grocery items and find the item in the data based on the item_name

async function getAisleNumber(itemName) {
        try {
            const response = await axios.get(`${API_URL}/items`);
            const data = response.data;

           
            const item = data.find((item) => item.item_name.toLowerCase() === itemName.toLowerCase());

            return item ? item.aisle_number : "Item not found in the list.";
        } catch (error) {
            console.error("error getting items:", error);
            return "Error getting aisle number.";
        }

    }


    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleAddItem = async (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      const aisle = await getAisleNumber(inputValue.trim()); // Search for the aisle number
      setItems([...items, { name: inputValue.trim(), aisle: aisle }]); // Add the new item with aisle number to the list
      setInputValue(""); 
    }
    };

    const handleFinalSave = async () => {
        const dataToSave = {
            list_name: text,
            items: items.map((item) => ({
                item_name: item.name,
                aisle_number: item.aisle,
            })),
        };

           try {
        const response = await axios.post(`${API_URL}/lists/`, dataToSave);
        console.log("list saved successfully", response.data);

        navigate("/")
    } catch (error) {
        console.error("Error saving list", error);
    }

    }

 
   
    return (
        <>
            <div className="grocery">
                <div className="grocery__edit">
                    {isEditing ? (
                        <div className="grocery__edit-container">
                            <input
                                type="text"
                                value={text}
                                onChange={handleChange}
                                className="grocery__input"
                                autoFocus
                            />
                            <button onClick={handleSaveClick} className="grocery__button">Save</button>
                        </div>
                    ) : (
                            <div className="grocery__view-container">
                                <h1 className="grocery__edit-text">{text}
                                    <img onClick={handleEditClick} className="grocery__icon" src={icons} />
                                </h1>
                            </div>
                        )}
                </div>

                    

                <form className="grocery__form" onSubmit={handleAddItem}>
                    <input className="grocery__input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    <button className="grocery__button" type="submit">Add Item</button>
                </form>

                <div className="grocery__list">
                    {items.map((item, index) => (
                        <div key={index} className="grocery__list-item">
                            <p>{item.name} : {item.aisle}</p>
                        </div>
                    ))}
                    {/* space filler */}
                    <br></br>
                    <br></br> 
                    <br></br>
                </div>

                <button onClick={handleFinalSave} className="grocery__button">Save</button>

            </div>

        </>
    );

}

export default GroceryList;