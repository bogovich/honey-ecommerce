import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageGallery from "react-image-gallery";
import { useMemo } from "react";
import { QuantitySelect } from "../components";
import { addToCart } from "../redux/slices/cartSlice";

import { selectProductsWCategories } from "../redux/selectors";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsWCategories);
  const status = useSelector((state) => state.productReducer.status);
  const [quantity, setQuantity] = useState(1);
  const { productSlugAndId } = useParams();
  const parts = productSlugAndId.split("-");
  const id = parts.pop();
  const thisProduct = products.filter((product) => product.id === id)[0];
  console.log(thisProduct);
  const images = useMemo(() => {
    return thisProduct
      ? thisProduct.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      : [];
  }, [thisProduct]);

  useEffect(() => {
    if (quantity < 1) setQuantity(1);
  }, [quantity]);

  if (
    ["pending", "loading"].includes(status) ||
    !thisProduct ||
    !products ||
    thisProduct.category === undefined
  ) {
    return <h1> Loading </h1>;
  }

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => prev + amount);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...thisProduct, amount: quantity }));
  };

  return (
    <section className="product-page">
      <div className="product-page__data">
        <ImageGallery
          items={images}
          thumbnailPosition="bottom"
          showPlayButton={false}
          showFullscreenButton={false}
          className="product-page__images"
        />
        <div className="product-page__info">
          <h1 className="product-page__title">
            {thisProduct.title.en}{" "}
            {thisProduct.category.name.en !== "Gift Packages"
              ? ` - ${thisProduct.packaging.en}`
              : ""}{" "}
          </h1>
          <div className="product-page__data-points">
            <div className="product-page__point">
              <span>Packaging</span> <span>{thisProduct.packaging.en}</span>
            </div>
            <div className="product-page__point">
              <span>Category</span> <span>{thisProduct.category.name.en}</span>
            </div>
            <div className="product-page__point">
              <span>Honey type</span> <span>{thisProduct.honey_type.en}</span>
            </div>
            <div className="product-page__point">
              <span>Description</span> <span>{thisProduct.description.en}</span>
            </div>
            <div className="product-page__point">
              <span>Details</span> <span>{thisProduct.details.en}</span>
            </div>
          </div>
            <span className="product-page__price">{thisProduct.price}€</span>
          <div className="product-page__actions">
            <QuantitySelect
              quantity={quantity}
              handleChange={handleQuantityChange}
            />
            <button
              className="btn-primary product-page__add-to-cart"
              onClick={handleAddToCart}
            >
              {" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
