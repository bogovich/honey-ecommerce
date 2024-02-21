import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
import { slugify } from "../utils";
import PropTypes from "prop-types";
import { useState } from "react";
import { useShowOverlay } from "../hooks/useShowOverlay";
import ContactInfo from "./ContactInfo";


const HamburgerMenu = ({ categories }) => {

  const [showHamburger, setShowHamburger] = useShowOverlay(false);
  const [openSubmenus, setOpenSubmenus] = useState({
    products: false,
    information: true,
  });
  const toggleMenu = (name) => {
    setOpenSubmenus({
      ...openSubmenus,
      [name]: !openSubmenus[name],
    });
  };

  const handleLinkClick = () => {
    setShowHamburger(false);
  };
  return (
    <>
      <div className="hamburger-menu">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox visuallyHidden"
          checked={showHamburger}
          onChange={() => setShowHamburger(!showHamburger)}
        />
        <label htmlFor="checkbox">
          <div className="hamburger">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
            <span className="bar bar4"></span>
          </div>
        </label>
      </div>
      <div className={`nav__mobile-menu ${showHamburger ? "active" : ""}`}>
        <div className="nav__mobile-menu-item">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </div>
        <div className="nav__mobile-menu-item">
          <div className="menu-item__title">
            <Link to="/products" onClick={handleLinkClick}>
              Products
            </Link>
            <FontAwesomeIcon
              className={`nav__row-item-icon ${
                openSubmenus["products"] ? "open" : "closed"
              }`}
              icon={faAngleDown}
              onClick={() => toggleMenu("products")}
            />
          </div>
          <ul
            className={`menu-item__submenu ${
              openSubmenus["products"] ? "open" : "closed"
            }`}
          >
            <li>
              <Link to="/products" onClick={handleLinkClick}>
                All products
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/products/${slugify(category.name.en)}`}
                  onClick={handleLinkClick}
                >
                  {category.name.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__mobile-menu-item">
          <div className="menu-item__title">
            <span>Information</span>
            <FontAwesomeIcon
            className={`nav__row-item-icon ${
                openSubmenus["information"] ? "open" : "closed"
                }`}
              icon={faAngleDown}
              onClick={() => toggleMenu("information")}
            />
          </div>
          <ul
            className={`menu-item__submenu ${
              openSubmenus["information"] ? "open" : "closed"
            }`}
          >
            <li>
              <Link to="/about-our-area" onClick={handleLinkClick}>
                About our area
              </Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav__mobile-menu-item">
          <Link to="/contact-us" onClick={handleLinkClick}>
            Contact us
          </Link>
        </div>
        <div className="nav__mobile-menu-contact">
            <ContactInfo />
        </div>
      </div>
    </>
  );
};

HamburgerMenu.propTypes = {
  categories: PropTypes.array,
};

export default HamburgerMenu;
