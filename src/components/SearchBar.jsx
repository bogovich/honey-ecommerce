import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import SearchResults from "./SearchResults";

const StyledInputAdornment = styled(InputAdornment)({
  position: "absolute",
  right: 0,
});

const StyledButton = styled(Button)({
  height: "41px",
  backgroundColor: "#ff7b00",
  boxShadow: "none",
  borderRadius: "0px 5px 5px 0px",
  "&:hover": {
    backgroundColor: "#d96900",
    boxShadow: "none",
  },
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ff7b00",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    border: "1px solid #d3d1d1",
    borderRadius: "5px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "350px",
    },
  },
}));

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

const SearchBar = () => {
  const dropdownRef = useRef(null);

  const {
    searchTerm,
    searchResults,
    handleSearchChange,
    handleSearchSubmit,
    handleKeySearch,
    handleClose
  } = useSearch();


  return (
    <Search>
      <SearchIconWrapper>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeySearch}
        endAdornment={
          <StyledInputAdornment position="end">
            <StyledButton
              variant="contained"
              color="primary"
              onClick={handleSearchSubmit}
            >
              SEARCH
            </StyledButton>
          </StyledInputAdornment>
        }
      />
      <SearchResults searchResults={searchResults} dropdownRef={dropdownRef} handleClose={handleClose}/>
    </Search>
  );
};

export default SearchBar;
