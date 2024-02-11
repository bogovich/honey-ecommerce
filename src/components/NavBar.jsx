import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faPhone,
  faEnvelope,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__row nav__top">
        <div className="nav__row-group">
          <div className="nav__row-item">
            <Link to="/contact">Contact us</Link>
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
          <Link to="/" className="nav__logo" alt="logo"></Link>
          <div className="nav__row-item nav__row-nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav__row-item nav__row-nav-item">
            <Link to="/shop">Products</Link>
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
          <Link to="/cart" className="nav__row-cart-link">
            <span className="nav__row-cart-quantity">1</span>
            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            
          </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
