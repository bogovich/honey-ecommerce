import { useState } from "react";
import PropTypes from "prop-types";

const PaymentDetails = ({ formData, updateFormData, prevStep, nextStep }) => {
  const [paymentDetails, setPaymentDetails] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ paymentDetails });
    nextStep();
  };

  const fillFakeData = () => {
    setPaymentDetails({
      name: "John Doe",
      cardNumber: "1234 5678 1234 5678",
      expirationDate: "12/23",
      cvv: "123",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout__form-btn-row">
        <h2>Payment Details (simulated)</h2>
        <button type="button" onClick={fillFakeData} className="btn-fake">
          Fill with fake data
        </button>
      </div>
      <div className="form__group-row">
        <div className="form__group half-row">
          <label htmlFor="name">Name on card</label>
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group half-row">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form__group-row">
        <div className="form__group half-row">
          <label htmlFor="expirationDate">Expiration date (MM/YY)</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group half-row">
          <label htmlFor="cvv">CVV (3 digits)</label>
          <input
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            type="number"
            pattern="\d{3}"
            maxLength="3"
            required
          />
        </div>
      </div>
      <div className="checkout__form-btn-row">
        <button onClick={prevStep} className="btn-secondary">
          Previous
        </button>
        <button type="submit" className="btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

PaymentDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PaymentDetails;
