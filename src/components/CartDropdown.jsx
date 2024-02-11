import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import CartDropdownItem from "./CartDropdownItem";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const cartQuantity = cart.length;

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div
      className={`nav__row-item nav__row-cart ${
        cartQuantity > 0 ? "active" : ""
      }`}
    >
      <Link to="/cart" className="nav__row-cart-link">
        <span className="nav__row-cart-quantity">{cartQuantity}</span>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </Link>
      <div className="nav__row-cart-display">
        {cart.map((item) => (
          <CartDropdownItem key={item.id} item={item} handleRemove={handleRemove} />
        ))}
        <h3>Total - {total}€</h3>
      </div>
    </div>
  );
};

export default CartDropdown;
