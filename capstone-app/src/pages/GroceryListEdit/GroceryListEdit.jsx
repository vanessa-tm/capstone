import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GroceryListEdit.scss"

function GroceryListEdit () {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    

    // get savednlist items based on ID

    useEffect(() => {
        async function getList() {
            try {
                const response = await axios.get(`http://localhost:8080/lists/${id}`);
                setText(response.data.list_name);
                setItems(response.data.items);    
            } catch (error) {
                console.error("Error fetching list data:", error);
            }
        }
        getList();
        
    }, [id]);

 

    // Handle when the user types item into input

    const handleAddItem = async (event) => {
        event.preventDefault();

        if (inputValue.trim() !== "") {
            const aisle = await getAisleNumber(inputValue.trim()); 
            setItems([...items, { item_name: inputValue.trim(), aisle_number: aisle }]); 
            setInputValue(""); 
        }
    };

    async function getAisleNumber(itemName) {
        try {
            const response = await axios.get("http://localhost:8080/items");
            const data = response.data;

            const item = data.find((item) => item.item_name.toLowerCase() === itemName.toLowerCase());

            return item ? item.aisle_number : "Item not found in the list.";
        } catch (error) {
            console.error("Error getting items:", error);
            return "Error getting aisle number.";
        }
    }


    // handle when user does a final save 

    const handleSaveList = async () => {
        const dataToSave = {
            list_name: text,
            items: items.map((item) => ({
                item_name: item.item_name,
                aisle_number: item.aisle_number,
            })),
        };


        // put request to update list 

        try {
            const response = await axios.put(`http://localhost:8080/lists/${id}/items`, dataToSave);
            console.log("List updated successfully", response.data);
            navigate(`/grocery-lists/${id}`); 
        } catch (error) {
            console.error("Error saving the updated list", error);
        }
    };

    return (
        <>
            <div className="grocery-update">
                <h1 className="grocery-update__text">{text}</h1>

                <form className="grocery-update__form" onSubmit={handleAddItem}>
                    <input
                        className="grocery-update__input"
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="grocery-update__button" type="submit">Add Item</button>
                </form>

                <div className="grocery-update__list">
                    {items.map((item, index) => (
                        <div key={index} className="grocery-update__list-item">
                            <p>{item.item_name} : {item.aisle_number}</p>
                        </div>
                    ))}
                </div>
                <button onClick={handleSaveList} className="grocery-update__button">Save</button>
            </div>
        </>
    );
}

export default GroceryListEdit;