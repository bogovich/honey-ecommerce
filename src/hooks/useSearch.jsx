import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectProductsWCategories } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const products = useSelector(selectProductsWCategories);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.length > 1) {
      const results = products.filter((product) =>
        product.title.en
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchTerm("");
    navigate(`/products/search?name=${searchTerm}`);
  };

  const handleKeySearch = (event) => {
    if (event.key === "Enter") {
      setSearchTerm("");
      navigate(`/products/search?name=${searchTerm}`);
    }
  };

  const handleClose = () => {
    setSearchTerm("");
    setSearchResults([]);
  }

  return {
    searchTerm,
    searchResults,
    handleSearchChange,
    handleSearchSubmit,
    handleKeySearch,
    handleClose
  };
};