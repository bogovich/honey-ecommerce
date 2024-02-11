import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const CartDropdownItem = ({ item, handleRemove }) => (
  <div key={item.id} className="nav__row-cart-item">
    <img src={item.images[1]} alt={item.title.en} />
    <div className="nav__row-cart-item-info">
      <h4>{item.title.en}</h4>
      <p>{item.price}€</p>
      <button onClick={() => handleRemove(item)}>
        Remove
        <FontAwesomeIcon icon={faXmarkCircle} size="lg" />
      </button>
    </div>
  </div>
);

CartDropdownItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartDropdownItem;
