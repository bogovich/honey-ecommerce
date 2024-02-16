import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const AddToCartButton = ({ product, quantity = 1 }) => {
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    dispatch(addToCart({ ...product, amount: quantity }));
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
      setTimeout(() => setAdded(false), 1000);
    }, 1500);
  };

  return (
    <button className="product__add-btn btn-primary" onClick={handleAdd}>
      {adding ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : added ? (
        <FontAwesomeIcon icon={faCheckCircle} />
      ) : (
        "Add to cart"
      )}
    </button>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number,
};

export default AddToCartButton;
