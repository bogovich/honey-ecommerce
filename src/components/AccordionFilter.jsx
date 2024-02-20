import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/system";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CustomAccordion = styled(Accordion)(() => ({
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

const AccordionFilter = ({ title, children }) => {
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
        <form className="filters__form">{children}</form>
      </AccordionDetails>
    </CustomAccordion>
  );
};

AccordionFilter.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AccordionFilter;
