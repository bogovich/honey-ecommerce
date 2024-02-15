import { faXmarkCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { slugify } from '../utils';
import PropTypes from "prop-types";

const CartDropdownItem = ({ item, handleRemove }) => {
  const nameSlug = slugify(item.title.en);
  const categorySlug = slugify(item.category.name?.en) || 'all';
  const packagingSlug = slugify(item.packaging.en);
  

  const productLink = `/products/${categorySlug}/${nameSlug}-${packagingSlug}-${item.id}`;

  return (
    <div key={item.id} className="nav__cart-item">
      <Link to={productLink}>
        <img
          className="nav__cart-item-image"
          src={item.images[1]}
          alt={item.title.en}
        />
      </Link>

      <div className="nav__cart-item__info">
        <Link to={productLink}>
          <h4 className="nav__cart-item__title">
            {item.title.en}
            {item.category.name.en !== "Gift Packages" ? ` - ${item.packaging.en}` : ""}
          </h4>
        </Link>
        <p className="nav__cart-item__price">
          {item.quantity}
          <FontAwesomeIcon icon={faXmark} size="sm" />
          {item.price}€
        </p>
        <span
          className="nav__cart-item-remove"
          onClick={() => handleRemove(item)}
        >
          <FontAwesomeIcon icon={faXmarkCircle} size="lg" />
        </span>
      </div>
    </div>
  );
};

CartDropdownItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default CartDropdownItem;
