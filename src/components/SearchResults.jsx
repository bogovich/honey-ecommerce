import PropTypes from "prop-types";
import SearchDropdownItem from "./SearchDropdownItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


const SearchResults = ({searchResults, dropdownRef, handleClose}) => {
    return (
        <>
        {searchResults.length > 0 && (
            <>
              <div className="nav__search-dropdown" ref={dropdownRef}>
                {searchResults.map((result) => (
                  <SearchDropdownItem key={result.id} item={result} handleClose={handleClose}/>
                ))}
              </div>
              <span className="nav__search-dropdown__close" onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </span>
            </>
          )}
        </>
    )
}
SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired,
    dropdownRef: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default SearchResults;
