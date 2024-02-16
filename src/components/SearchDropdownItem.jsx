import { Link } from "react-router-dom";
import { slugify } from '../utils';
import PropTypes from "prop-types";

const SearchDropdownItem = ({ item }) => {
  const nameSlug = slugify(item.title.en);
  const categorySlug = slugify(item.category.name?.en) || 'all';
  const packagingSlug = slugify(item.packaging.en);
  

  const productLink = `/products/${categorySlug}/${nameSlug}-${packagingSlug}-${item.id}`;

  return (
    <Link key={item.id} to={productLink}>
    <div  className="nav__search-item">
      
        <img
          className="nav__search-item-image"
          src={item.images[1]}
          alt={item.title.en}
        />
      

      <div className="nav__search-item__info">
          <h4 className="nav__search-item__title">
            {item.title.en}
            {item.category.name.en !== "Gift Packages" ? ` - ${item.packaging.en}` : ""}
          </h4>
        <p className="nav__search-item__price">
          {item.price}€
        </p>
      </div>
    </div>
    </Link>
  );
};

SearchDropdownItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default SearchDropdownItem;
