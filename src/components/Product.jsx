import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { slugify } from "../utils";

const Product = ({ product }) => {
  const { id, category, images, title, packaging, price } = product;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  if(product.category === undefined) return null;

  const nameSlug = slugify(title.en);
  const categorySlug = slugify(category.name?.en) || "all";
  const packagingSlug = slugify(packaging.en);

  const productLink = `/products/${categorySlug}/${nameSlug}-${packagingSlug}-${id}`;

  return (
    <div className="product">
      <div className="product__img">
        <Link to={productLink}>
          <img src={images[1]} alt={title.en} />
        </Link>
      </div>

      <h3 className="product__title">
        <Link to={productLink}>
          {title.en}
          {category.name.en !== "Gift Packages" ? ` - ${packaging.en}` : ""}
        </Link>
      </h3>

      <div className="product__add">
        <span className="product__price">{price}€</span>
        <button className="product__add-btn btn-primary" onClick={handleAdd}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
