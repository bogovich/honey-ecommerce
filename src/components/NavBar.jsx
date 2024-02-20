import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import { useSelector } from "react-redux";
import { slugify } from "../utils";
import "./NavBar.css";
import HamburgerMenu from "./HamburgerMenu";
import SearchBarMobile from "./SearchBarMobile";



const NavBar = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

  return (
    <nav className="nav">
      <div className="nav__row nav__top">
        <div className="nav__row-group">
          <div className="nav__row-item">
            <Link to="/contact-us">Contact us</Link>
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
            <a href="mailto:info@honeyshop.hr">
              <FontAwesomeIcon icon={faEnvelope} />
              info@honeyshop.hr
            </a>
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
            <Link to="/products">Products</Link>
            <FontAwesomeIcon
              className="nav__row-item-icon"
              icon={faAngleDown}
            />
            <ul className="nav__dropdown">
              <li>
                <Link to="/products">All products</Link>
              </li>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/products/${slugify(category.name.en)}`}>
                    {category.name.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__row-item nav__row-nav-item">
            Information
            <FontAwesomeIcon
              className="nav__row-item-icon"
              icon={faAngleDown}
            />
            <ul className="nav__dropdown">
              {/* <li>
                <Link to="/about-us">About us</Link>
              </li> */}
              <li>
                <Link to="/about-our-area">About our area</Link>
              </li>
              {/* <li>
                <Link to="/delivery">Delivery</Link>
              </li> */}
              {/* <li>
                <Link to="/faq">FAQ</Link>
              </li> */}
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav__row-group">
          <SearchBar />
        </div>
        <div className="nav__row-group">
          <CartDropdown />
        </div>
        <div className="nav__mobile-group">
          <Link to="/" className="nav__logo" alt="logo"></Link>
          <HamburgerMenu
          categories={categories}
        />
        </div>

        <div className="nav__mobile-group">
          <SearchBarMobile />
          <CartDropdown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
