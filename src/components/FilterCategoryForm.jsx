import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  position: "initial",
  "&.MuiAccordion-root": {
    margin: 0,
    "&.Mui-expanded": {
      margin: 0,
    },
    "& .MuiAccordionSummary-root": {
      minHeight: 0,
      paddingBottom: "5px",
      paddingLeft: "0px",
      paddingRight: "0px",
      borderBottom: "1px solid #d9d9d9",
      "&.Mui-expanded": {
        minHeight: 0,
      },
    },
    "& .MuiAccordionSummary-content": {
      margin: 0,
      "& h2": {
        fontSize: "1.25rem",
      },
      "&.Mui-expanded": {
        margin: 0,
      },
    },
    "& .MuiAccordionDetails-root": {
      padding: "8px 4px 8px",
    },
  },
}));
const FilterCategoryForm = ({ filter, setFilter, title }) => {
  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2>{title}</h2>
      </AccordionSummary>
      <AccordionDetails>
        <form className="filters__form">
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
        </form>
      </AccordionDetails>
    </CustomAccordion>
  );
};

FilterCategoryForm.propTypes = {
  filter: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FilterCategoryForm;
