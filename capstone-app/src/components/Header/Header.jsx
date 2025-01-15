import "./Header.scss";
import logo from "../../assets/logo/quicklist-high-resolution-logo.png";
import { Link } from "react-router-dom";


function Header(){

    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo image" />
            <div className="header__menu">
                <Link to="/" className="header__link">
                    <p className="header__home">Home</p>
                </Link>
                
                <Link to="/store-setup" className="header__link">
                    <p className="header__store">Store Setup</p>
                </Link>
                
            </div>
        </div>
    );


}

export default Header;