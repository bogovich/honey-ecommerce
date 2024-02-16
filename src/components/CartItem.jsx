import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { faXmark, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slugify } from "../utils";
import PropTypes from "prop-types";
import QuantitySelect from "./QuantitySelect";
import { roundToTwoDecimals } from "../utils";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const nameSlug = slugify(item.title.en);
  const categorySlug = slugify(item.category.name?.en) || "all";
  const packagingSlug = slugify(item.packaging.en);

  const total = roundToTwoDecimals(item.price * item.quantity);

  const productLink = `/products/${categorySlug}/${nameSlug}-${packagingSlug}-${item.id}`;

  const handleQuantityChange = (amount) => {
    if (item.quantity + amount <= 0) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(updateQuantity({ ...item, quantity: item.quantity + amount }));
    }
  };

  return (
    <div key={item.id} className="cart__item">
      <div className="cart__item-img">
        <Link to={productLink}>
          <img src={item.images[1]} alt={item.title.en} />
        </Link>
      </div>
      <div className="cart__item-info">
        <h3 className="cart__item-name">
          <Link to={productLink}>
            {item.title.en}
            {item.category.name.en !== "Gift Packages"
              ? ` - ${item.packaging.en}`
              : ""}
          </Link>
        </h3>

        <span className="cart__item-category">{item.category.name.en}</span>
        <button
          className="cart__item-remove"
          onClick={() => dispatch(removeFromCart(item))}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="cart__item-remove-icon"/>
          Remove item
        </button>
      </div>

      <QuantitySelect
        quantity={item.quantity}
        handleChange={handleQuantityChange}
      />
      <div className="cart__item-price">
        <span className="cart__item-total-price">{total}€</span>
        <span className="cart__item-single-price">
          {item.quantity} <FontAwesomeIcon icon={faXmark} size="sm" />{" "}
          {item.price}€
        </span>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
