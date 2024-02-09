import { useState } from "react";
import Logo from "../assets/opg_logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = () => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(event.target.innerText);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setCartOpen(open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={
        {
          backgroundColor: "darkslategray",
          color: "white",
        }
      }>
        <Toolbar>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "50px", height: "50px" }}
          />
          <Typography
            variant="body1"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NVTN
          </Typography>
          <Typography
            variant="body1"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: "auto",
              display: { md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shop
          </Typography>

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
            <Typography
              variant="body1"
              noWrap
              component="span"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              User
            </Typography>
          </div>
          <Button onClick={toggleDrawer(true)} sx={{
            backgroundColor: "darkslategray",
            color: "white",
          }}>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{marginRight: '5px'}}/>
            Cart
          </Button>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={toggleDrawer(false)}
            sx={{
                width: 300,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                    color: "white",
                },
                
            }}>
            <Typography
              variant="h4"
              noWrap
              component="h4"
              sx={{
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Cart
            </Typography>
            </Drawer>
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
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
