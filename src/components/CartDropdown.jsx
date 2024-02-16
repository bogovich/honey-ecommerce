import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import CartDropdownItem from "./CartDropdownItem";
import { roundToTwoDecimals } from "../utils";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const totalWDelivery = roundToTwoDecimals(total + 5);
  const cartQuantity = cart.length;

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div
      className={`nav__row-item nav__cart ${
        cartQuantity > 0 ? "active" : ""
      }`}
    >
      <Link to="/cart" className="nav__cart-link">
        <span className="nav__cart-quantity">{cartQuantity}</span>
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </Link>
      <div className="nav__cart-display">
        <div className="nav__cart-display-items">
          {cart.map((item) => (
            <CartDropdownItem
              key={item.id}
              item={item}
              handleRemove={handleRemove}
            />
          ))}
        </div>
        <div className="nav__cart-display-total">
          <span>Products:</span><span>{total}€</span>
          <span>Delivery:</span><span>5.00€</span>
          <span><strong>Total:</strong></span><span><strong>{totalWDelivery}€</strong></span>
        </div>
        <div className="nav__cart-display-actions">
          <Link className="nav__cart-action-btn btn-cart" to="/cart">View Cart</Link>
          <Link className="nav__cart-action-btn btn-checkout" to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
