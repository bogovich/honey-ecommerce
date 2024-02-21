import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "../hooks/useSearch";
import SearchResults from "./SearchResults";
import { useState, useRef } from "react";

const SearchBarMobile = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);
  
  const {
    searchTerm,
    searchResults,
    handleSearchChange,
    handleSearchSubmit,
    handleKeySearch,
    handleClose,
  } = useSearch();

  const handleMobileClose = () => {
    setShowSearch(false);
    handleClose();
  }
  return (
    <div className="mobile-search">
      <div className="mobile-search__btn-show">
        <input
          type="checkbox"
          id="searchbox"
          className="searchbox visuallyHidden"
          checked={showSearch}
          onChange={() => setShowSearch((prev) => !prev)}
        />
        <label htmlFor="searchbox">
          <FontAwesomeIcon
            className="mobile-search__icon"
            icon={faSearch}
            size="xl"
          />
        </label>
      </div>
      <div
        className={`mobile-search__input ${showSearch ? "active" : "inactive"}`}
      >
        <div className="mobile-search__container">
          <input
            type="text"
            placeholder="Search..."
            className="mobile-search__input-field"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeySearch}
          />
          <div className="mobile-search__btn-close">
            <FontAwesomeIcon
              className="mobile-search__btn-close-icon"
              icon={faXmark}
              onClick={handleMobileClose}
            />
          </div>
          <div className="mobile-search__btn-search">
            <FontAwesomeIcon
              className="mobile-search__btn-search-icon"
              icon={faSearch}
              onClick={handleSearchSubmit}
            />
          </div>
            <SearchResults
                searchResults={searchResults}
                dropdownRef={dropdownRef}
                handleClose={handleMobileClose}
            />
        </div>
      </div>
    </div>
  );
};
export default SearchBarMobile;
