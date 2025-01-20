import axios from "axios";
import iconsDelete from "../../assets/icons/delete.png";
import iconsEdit from "../../assets/icons/edit-button.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Home.scss";


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


        async function deleteList(id) {
            try {
                const deleted = await axios.delete(`http://localhost:8080/lists/${id}`);

                const updatedLists = await axios.get("http://localhost:8080/lists/")
                setLists(updatedLists.data)

            } catch (error) {
                console.error("Error deleting list", error);
            }
            
        }
        



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
                    
                    <div key={list.id} className="list">
                        
                        <div  className="list__item-container">
                            <Link to={`/grocery-lists/${list.id}`} className="list__link">
                                <h3 className="list__item" >{list.list_name}</h3>
                            </Link>
                        </div>
                        <div className="list__image-container">
                            <Link to={`/grocery-lists/update/${list.id}`}><img src={iconsEdit} className="list__image" /></Link>
                            <img onClick={() => deleteList(list.id)} src={iconsDelete} className="list__image" />
                        </div>
                        
                    </div>
                ))} 
            </div>

        </>
    );
}

export default Home;