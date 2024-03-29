import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import { slugify } from "../utils";
import AddToCartButton from "./AddToCartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const { id, category, images, title, packaging, price } = product;
  const [isImageLoaded, setImageLoaded] = useState(false);
  if(product.category === undefined) return null;

  const nameSlug = slugify(title.en);
  const categorySlug = slugify(category.name?.en) || "all";
  const packagingSlug = slugify(packaging.en);

  const productLink = `/products/${categorySlug}/${nameSlug}-${packagingSlug}-${id}`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="product">
      <div className="product__img">
      <Link to={productLink}>
          {!isImageLoaded && <FontAwesomeIcon className="product__img-loader" icon={faSpinner} spin size="xl" />}
          <img src={images[1]} alt={title.en} style={{display: isImageLoaded ? 'block' : 'none'}} onLoad={handleImageLoad} />
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
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
