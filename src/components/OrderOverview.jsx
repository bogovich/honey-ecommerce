import PropTypes from "prop-types";
import { DELIVERY_COST, TAX_RATE } from "../constants";
import { roundToTwoDecimals } from "../utils";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";
import {
  faSpinner,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
const OrderOverview = ({ formData, prevStep, nextStep }) => {
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const [finished, setFinished] = useState(false);

  const total = formData.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalWithoutTax = roundToTwoDecimals(total / (1 + TAX_RATE));
  const totalTax = roundToTwoDecimals(total - totalWithoutTax);
  const finalDeliveryCost =
    formData.shippingDetails.shippingType === "postal" ? DELIVERY_COST : 0;
  const totalWDelivery = roundToTwoDecimals(total + finalDeliveryCost);

  const shipping_type =
    formData.shippingDetails.shippingType === "postal" ? "Postal" : "Pickup";

  const handleProcess = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setFinished(true);
      setTimeout(() => {
        nextStep();
        dispatch(clearCart());
      }, 2500);
    }, 2000);
  };
  return (
    <section className="summary">
      <div className="summaries">
        <div className="order-summary">
          <h2 className="summary__title">Order Summary</h2>
          <div className="summary__items">
            {formData.cart.map((item) => (
              <div key={item.id} className="summary__item">
                <div>
                  <h3 className="summary__item-title">{item.title.en}</h3>
                  <p className="summary__item-contents">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="summary__item-price">
                  {item.price * item.quantity}€
                </p>
              </div>
            ))}
          </div>
          <div className="summary__total">
            <span>Total w/o tax:</span>
            <span>{totalWithoutTax}€</span>
            <span>Total tax({TAX_RATE * 100}%):</span>
            <span>{totalTax}€</span>
            <span>Total w/o delivery:</span>
            <span>{roundToTwoDecimals(total)}€</span>
            <span>Delivery:</span>
            <span>{finalDeliveryCost.toFixed(2)}€</span>
            <span>
              <strong>Total w/ delivery:</strong>
            </span>
            <span>
              <strong>{totalWDelivery}€</strong>
            </span>
          </div>
        </div>
        <div className="customer-summary">
          <div className="shipping-summary">
            <h2 className="summary__title">Customer Details</h2>
            <div className="summary__shipping-name">
              <p>
                {formData.shippingDetails.firstName}{" "}
                {formData.shippingDetails.lastName} -{" "}
                {formData.shippingDetails.email}
              </p>
              <p>
                {formData.shippingDetails.address},{" "}
                {formData.shippingDetails.postalCode}{" "}
                {formData.shippingDetails.city}
              </p>
              <p>
                {formData.shippingDetails.region},{" "}
                {formData.shippingDetails.country}
              </p>
            </div>
            <div className="summary__shipping-details">
              <h3>Shipping</h3>
              <p>{shipping_type}</p>
            </div>
          </div>
          <div className="payment-summary">
            <h2 className="summary__title">Payment Details</h2>
            <div className="summary__payment-name">
              <p>{formData.paymentDetails.name}</p>
              <p>
                {formData.paymentDetails.cardNumber
                  .split(" ")
                  .join("")
                  .replace(/\d(?=\d{4})/g, "*")}
              </p>
            </div>
            <div className="summary__payment-details">
              <h3>Expiration date</h3>
              <p>{formData.paymentDetails.expirationDate}</p>
            </div>
          </div>
        </div>
        {(processing || finished) && (
        <div className="contact__page-form-status">
          {processing ? (
            <div className="contact__page-form-confirmation-message">
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                className="contact__page-form-confirmation-message-icon"
              />
              <p>Your payment is being processed..</p>
            </div>
          ) : finished ? (
            <div className="contact__page-form-confirmation-message">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="contact__page-form-confirmation-message-icon"
              />
              <p>
                Your payment has been processed successfully.
              </p>
            </div>
          ) : null}
        </div>
      )}
      </div>
      <div className="checkout__form-btn-row">
        <button onClick={prevStep} className="btn-secondary">
          Previous
        </button>
        <button onClick={handleProcess} className="btn-primary">
          Place order
        </button>
      </div>
    </section>
  );
};

OrderOverview.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default OrderOverview;
