import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const CheckoutSteps = ({ currentStep }) => {
    return (
        <div className="checkout__steps">
        <div className={`checkout__step ${currentStep === 1 && "active"} ${currentStep > 1 && 'completed'}`}>
          {currentStep > 1 ? (
            <FontAwesomeIcon
              className="checkout__step-completed"
              icon={faCircleCheck}
            />
          ) : (
            <span className="checkout__step-num">1</span>
          )}
          <span className="checkout__step-title">Shipping details</span>
        </div>
        <div className={`checkout__step ${currentStep === 2 && "active"} ${currentStep > 2 && 'completed'}`}>
          {currentStep > 2 ? (
            <FontAwesomeIcon
              className="checkout__step-completed"
              icon={faCircleCheck}
            />
          ) : (
            <span className="checkout__step-num">2</span>
          )}
          <span className="checkout__step-title">Payment details</span>
        </div>
        <div className={`checkout__step ${currentStep === 3 && "active"} ${currentStep > 3 && 'completed'}`}>
          {currentStep > 3 ? (
            <FontAwesomeIcon
              className="checkout__step-completed"
              icon={faCircleCheck}
            />
          ) : (
            <span className="checkout__step-num">3</span>
          )}
          <span className="checkout__step-title">Review your order</span>
        </div>
      </div>
    );

}

CheckoutSteps.propTypes = {
    currentStep: PropTypes.number.isRequired,
};

export default CheckoutSteps;