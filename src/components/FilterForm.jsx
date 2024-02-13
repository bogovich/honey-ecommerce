import PropTypes from "prop-types";

const FilterForm = ({ filter, setFilter, title }) => (
  <form>
    <h2>{title}</h2>
    {Object.keys(filter).map((key) => {
      return (
        <div key={key}>
          <input
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
          <label htmlFor={key}>{key}</label>
        </div>
      );
    })}
  </form>
);

FilterForm.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterForm;
