import "./Home.scss";
import { Link } from "react-router-dom";

function Home () {
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
        </>
    )
}

export default Home;