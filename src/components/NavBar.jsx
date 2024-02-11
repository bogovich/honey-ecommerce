import Logo from "../assets/opg_logo.png";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faPhone,
  faEnvelope,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";



const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__row nav__top">
        <div className="nav__row-group">
          <div className="nav__row-item">
            <a href="/contact">Contact us</a>
          </div>
          <div className="nav__row-item-divider"></div>
          <div className="nav__row-item">
            <a href="tel:+385 91 123 4567">
              <FontAwesomeIcon icon={faPhone} />
              +385 91 123 4567
            </a>
          </div>
          <div className="nav__row-item-divider"></div>
          <div className="nav__row-item">
            <a href="mailto:info@honeypot.hr">
              <FontAwesomeIcon icon={faEnvelope} />
              info@honeypot.hr
            </a>
          </div>
        </div>
        <div className="nav__row-group">
          <div className="nav__row-item">
            <a href="/login"> Login</a>
            <FontAwesomeIcon icon={faUser} />
            <a href="/register"> Register</a>
          </div>
        </div>      
      </div>
      <div className="nav__row nav__bottom">
        <div className="nav__row-group">
          <img src={Logo} alt="logo" style={{ width: "50px", height: "50px" }} /> 
          <div className="nav__row-item nav__row-nav-item">
            <span>Home</span>
          </div>
          <div className="nav__row-item nav__row-nav-item">
            Products
            <FontAwesomeIcon className="nav__row-item-icon" icon={faAngleDown} />
          </div>
          <div className="nav__row-item nav__row-nav-item">
            Information
            <FontAwesomeIcon className="nav__row-item-icon" icon={faAngleDown} />
          </div>
        </div>
        <div className="nav__row-group">
          <SearchBar />
        </div>
        <div className="nav__row-group">
        <div className="nav__row-item nav__row-cart">
          <a href="/cart" className="nav__row-cart-link">
            <span className="nav__row-cart-quantity">1</span>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            
          </a>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
