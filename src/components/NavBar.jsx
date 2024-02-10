import { useState } from "react";
import Logo from "../assets/opg_logo.png";
import Button from '@mui/material/Button';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
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
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
              <FontAwesomeIcon icon={faPhone} size="md" />
              +385 91 123 4567
            </a>
          </div>
          <div className="nav__row-item-divider"></div>
          <div className="nav__row-item">
            <a href="mailto:info@honeypot.hr">
              <FontAwesomeIcon icon={faEnvelope} size="md" />
              info@honeypot.hr
            </a>
          </div>
        </div>
        <div className="nav__row-group">
          <div className="nav__row-item">
            <a href="/login"> Login</a>
            <FontAwesomeIcon icon={faUser} size="md" />
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
            <FontAwesomeIcon className="nav__row-item-icon" icon={faAngleDown} size="md" />
          </div>
          <div className="nav__row-item nav__row-nav-item">
            Information
            <FontAwesomeIcon className="nav__row-item-icon" icon={faAngleDown} size="md" />
          </div>
        </div>
        <div className="nav__row-group">
          <SearchBar />
        </div>
        <div className="nav__row-group">
        <div className="nav__row-item nav__row-cart">
          <a href="/cart" className="nav__row-cart-link">
            <span className="nav__row-cart-quantity">1</span>
            <FontAwesomeIcon icon={faShoppingCart} size="md"/>
            
          </a>
          </div>
        </div>
        
      </div>
          {/* <img
            src={Logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <a href="/" style={{textDecoration: 'none', color: 'white', fontWeight: 700, textTransform: 'uppercase', fontSize: '1rem'}}>
            Home
          </a>
          <a href="/" style={{textDecoration: 'none', color: 'white', fontWeight: 700, textTransform: 'uppercase', fontSize: '1rem'}}>
            Shop
          </a>

          <Search>
            <SearchIconWrapper>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="nav__user" onClick={handleMenu} style={{marginRight: '10px'}}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <span style={{fontWeight: 700, textTransform: 'uppercase'}}>User</span>
          </div>
          <Button  sx={{
            backgroundColor: "darkslategray",
            color: "white",
          }}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{marginRight: '5px'}}/>
            Cart
          </Button>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {auth ? (
              <div>
                <MenuItem key="profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                <MenuItem key="account" onClick={handleClose}>
                  My account
                </MenuItem>
              </div>
            ) : (
              <MenuItem onClick={handleClose}>Login</MenuItem>
            )}
          </Menu> */}
    </nav>
  );
};

export default NavBar;
