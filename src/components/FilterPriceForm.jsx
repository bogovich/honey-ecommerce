import PropTypes from "prop-types";
import AccordionFilter from "./AccordionFilter";

const FilterPriceForm = ({ filter, setFilter, priceRange, title }) => {
  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= filter.max) {
      setFilter({ ...filter, min: newMin });
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= filter.min) {
      setFilter({ ...filter, max: newMax });
    }
  };
  const slideValuesStyle = {
    left: `${
      ((filter.min - priceRange.min) / (priceRange.max - priceRange.min)) * 100
    }%`,
    width: `${
      ((filter.max - filter.min) / (priceRange.max - priceRange.min)) * 100
    }%`,
  };

  return (
    <AccordionFilter title={title}>
      <>
        <div className="price-input-container">
          <div className="price-input">
            <div className="price-field">
              <span>Min</span>
              <input
                type="number"
                className="min-input"
                value={filter.min}
                onChange={handleMinChange}
              />
            </div>
            <div className="price-field">
              <span>Max</span>
              <input
                type="number"
                className="max-input"
                value={filter.max}
                onChange={handleMaxChange}
              />
            </div>
          </div>
          <div className="slider-container">
            <div className="price-slider" style={slideValuesStyle}></div>
          </div>
        </div>

        <div className="range-input">
          <input
            type="range"
            className="min-range"
            min={priceRange.min}
            max={priceRange.max}
            value={filter.min}
            onChange={handleMinChange}
            step="1"
          />
          <input
            type="range"
            className="max-range"
            min={priceRange.min}
            max={priceRange.max}
            value={filter.max}
            onChange={handleMaxChange}
            step="1"
          />
        </div>
      </>
    </AccordionFilter>
  );
};

FilterPriceForm.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  priceRange: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterPriceForm;
