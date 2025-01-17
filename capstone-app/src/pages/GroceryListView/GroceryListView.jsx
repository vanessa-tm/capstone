import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./GroceryListView.scss";

function GroceryListView() {
  
    const {id} = useParams();
    const [list, setList] = useState(null);

    useEffect(() => {

        async function getList() {
            try {

                const response = await axios.get(`http://localhost:8080/lists/${id}`);
                setList(response.data);

            } catch (error) {
                console.error("Error getting lists", error);
            }
        }
        getList();

    }, [id]);

    if (!list) {
    return <p>Loading...</p>;
  }

  return (
    <>
        <div className="view-list">

            <h1 className="view-list__name">{list.list_name}</h1>

            <div className="view-list__list">
                
                {list.items.map((item, index) => (
                <div key={index} className="view-list__item">
                    <p>{item.item_name} : {item.aisle_number}</p>
                </div>
                 ))}
            </div>
        </div>
    </>
  );
}

export default GroceryListView;
