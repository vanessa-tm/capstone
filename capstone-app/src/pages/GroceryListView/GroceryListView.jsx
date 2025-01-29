import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./GroceryListView.scss";

const API_URL = import.meta.env.VITE_API_URL;

function GroceryListView() {
  
    const {id} = useParams();
    const [list, setList] = useState(null);

    useEffect(() => {

        async function getList() {
            try {

                const response = await axios.get(`${API_URL}/lists/${id}`);
                setList(response.data);

            } catch (error) {
                console.error("Error getting lists", error);
            }
        }
        getList();

    }, [id]);



      const handleCheckChange = async (itemId, checked) => {

    const itemToUpdate = list.items.find(item => item.id === itemId);
    
    if (!itemToUpdate) {
        console.error('Item not found');
        return;
    }

    const updatedItem = {
        item_name: itemToUpdate.item_name,
        aisle_number: itemToUpdate.aisle_number,
        checked: checked,
    };

    // Send the updated item in the required format
    try {
        const response = await axios.put(
            `${API_URL}/lists/${id}/items`,
            { items: [updatedItem] } // Send the updated item as part of an array
        );
        console.log('Check updated successfully:', response.data);

        // Update the list in the state with the modified item
        setList((prevList) => {
            // Create a new list with the updated item
            const updatedItems = prevList.items.map((item) =>
                item.id === itemId ? { ...item, checked: checked } : item
            );
            return { ...prevList, items: updatedItems };
        });
    } catch (error) {
        console.error('Error updating item:', error);
    }
};

                if (!list) {
                return <p>Loading...</p>;
                }

  return (
    <>
        <div className="view-list">

            <h1 className="view-list__name">{list.list_name}</h1>

            <div className="view-list__list">
                
                {list.items
                .slice()
                .sort((a, b) => {
                    // Extract numbers from "Aisle X" and compare
                    const aisleA = parseInt(a.aisle_number.match(/\d+/)?.[0] || 0, 10);
                    const aisleB = parseInt(b.aisle_number.match(/\d+/)?.[0] || 0, 10);
                    return aisleA - aisleB;
                })
                    .map((item, index) => (
                    <div key={index} className="view-list__item">
                        <p> 
                            <input type="checkbox" className="view-list__check" checked={item.checked} onChange={(e) => handleCheckChange(item.id, e.target.checked)}/>
                            {item.item_name} : {item.aisle_number}
                        </p>
                    </div>
                ))}
            </div>
            <div>      
            </div>
        </div>
    </>
  );
}

export default GroceryListView;
