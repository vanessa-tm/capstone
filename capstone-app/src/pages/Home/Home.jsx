import axios from "axios";
import "./Home.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import iconsEdit from "../../assets/icons/edit-button.png";
import iconsDelete from "../../assets/icons/delete.png";

function Home () {

    const [lists, setLists] = useState([]);

    useEffect(() => {

        async function getLists() {
            try {

                const response = await axios.get("http://localhost:8080/lists/");
                setLists(response.data);

            } catch (error) {
                console.error("Error getting lists", error);
            }
                
        }

        getLists();

    }, []);

   



    return (
        <>
            <div className="hero">
                <h1 className="hero__title">My Grocery Lists</h1>
                <p className="hero__subtitle">Manage all your shopping lists in one place</p>
                
            </div>
            <div className="hero__button-container">
                <Link to="/grocery-lists" >
                    <button className="hero__button">Create New List</button>
                </Link>
            </div>
            <div >
                  {lists.map ((list) => (
                    <div key={list.id} className="list" >
                        <div  className="list__item-container">
                            <h3 className="list__item" >{list.list_name}</h3>
                        </div>
                        <div className="list__image-container">
                            <img src={iconsEdit} className="list__image" />
                            <img src={iconsDelete} className="list__image" />
                        </div>
                    </div>
                ))} 
            </div>

        </>
    );
}

export default Home;