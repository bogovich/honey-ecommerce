import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const QuantitySelect = ({ quantity, handleChange }) => (



  <div className="quantity-select">
    <button
      className="quantity-select-btn"
      onClick={() => handleChange(-1)}
    >
      <FontAwesomeIcon icon={faMinus} fixedWidth />
    </button>
    <span className="quantity-select-value">{quantity}</span>
    <button
      className="quantity-select-btn"
      onClick={() => handleChange(1)}
    >
      <FontAwesomeIcon icon={faPlus} fixedWidth />
    </button>
  </div>
);

QuantitySelect.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default QuantitySelect;
