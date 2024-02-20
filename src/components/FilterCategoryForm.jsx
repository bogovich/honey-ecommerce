import PropTypes from "prop-types";
import AccordionFilter from "./AccordionFilter";

const FilterCategoryForm = ({ filter, setFilter, title }) => {
  return (
    <AccordionFilter title={title}>
      {filter &&
        filter.map((item) => {
          return (
            <div className="checkbox-wrapper-4" key={item.id}>
              <input
                className="inp-cbx"
                type="checkbox"
                id={item.id}
                name={item.id}
                checked={item.checked}
                onChange={(event) =>
                  setFilter(
                    filter.map((f) =>
                      f.id === item.id
                        ? { ...f, checked: event.target.checked }
                        : f
                    )
                  )
                }
              />
              <label className="cbx" htmlFor={item.id}>
                <span>
                  <svg width="12px" height="10px">
                    <use xlinkHref="#check-4"></use>
                  </svg>
                </span>
                <span>{item.name.en}</span>
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
};

FilterCategoryForm.propTypes = {
  filter: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterCategoryForm;
