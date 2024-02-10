import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
  color: "#ff7b00"
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
  return (
    <Search>
    <SearchIconWrapper>
      <FontAwesomeIcon icon={faSearch} size="lg" />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ "aria-label": "search" }}
      endAdornment={
        <StyledInputAdornment position="end">
          <StyledButton variant="contained" color="primary">SEARCH</StyledButton>
        </StyledInputAdornment>
      }
    />
  </Search>
  )
  }

export default SearchBar;
