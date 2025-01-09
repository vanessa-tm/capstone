import "./Header.scss";
import logo from "../../assets/logo/quicklist-high-resolution-logo.png";


function Header(){

    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo image" />
            <div className="header__menu">
                <p className="header__home">Home</p>
                <p className="header__store">Store Setup</p>
            </div>
        </div>
        


    );


}

export default Header;