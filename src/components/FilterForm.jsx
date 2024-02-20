import PropTypes from "prop-types";
import AccordionFilter from "./AccordionFilter";

const FilterForm = ({ filter, setFilter, title }) => (
  <AccordionFilter title={title}>
    {Object.keys(filter).map((key) => {
      return (
        <div className="checkbox-wrapper-4" key={key}>
          <input
            className="inp-cbx"
            type="checkbox"
            id={key}
            name={key}
            checked={filter[key]}
            onChange={(event) =>
              setFilter({
                ...filter,
                [event.target.name]: event.target.checked,
              })
            }
          />
          <label className="cbx" htmlFor={key}>
            <span>
              <svg width="12px" height="10px">
                <use xlinkHref="#check-4"></use>
              </svg>
            </span>
            <span>{key}</span>
          </label>
          <svg className="inline-svg">
            <symbol id="check-4" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </symbol>
          </svg>
        </div>
      );
    })}
  </AccordionFilter>
);

FilterForm.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterForm;
