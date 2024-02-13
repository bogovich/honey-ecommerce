import PropTypes from "prop-types";

const FilterCategoryForm = ({ filter, setFilter, title }) => {
  return (
    <form>
      <h2>{title}</h2>
      {filter &&
        filter.map((item) => {
          return (
            <div key={item.id}>
              <input
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
              <label htmlFor={item.id}>{item.name.en}</label>
            </div>
          );
        })}
    </form>
  );
};

FilterCategoryForm.propTypes = {
  filter: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterCategoryForm;
