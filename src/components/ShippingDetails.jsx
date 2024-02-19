import { useState } from "react";
import PropTypes from "prop-types";

const ShippingDetails = ({ formData, updateFormData, nextStep }) => {
  const [shippingDetails, setShippingDetails] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ shippingDetails });
    nextStep();
  };

  const fillFakeData = () => {
    setShippingDetails({
      firstName: "John",
      lastName: "Doe",
      address: "123 Fake St",
      email: "johndoe@gmail.com",
      city: "Springfield",
      region: "Springfield",
      postalCode: "12345",
      country: "USA",
      shippingType: "postal",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout__form-btn-row">
        <h2>Shipping Details</h2>
        <button type="button" onClick={fillFakeData} className="btn-fake">
          Fill with fake data
        </button>
      </div>
      <div className="form__group-row">
        <div className="form__group half-row">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            value={shippingDetails.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group half-row">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            value={shippingDetails.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          value={shippingDetails.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={shippingDetails.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form__group-row">
        <div className="form__group half-row">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={shippingDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group half-row">
          <label htmlFor="region">Region</label>
          <input
            type="text"
            name="region"
            value={shippingDetails.region}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form__group-row">
        <div className="form__group half-row">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={shippingDetails.postalCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group half-row">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            value={shippingDetails.country}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="shippingType">Shipping Type</label>
        <select
          name="shippingType"
          value={shippingDetails.shippingType}
          onChange={handleChange}
          required
        >
          <option value="postal">Postal</option>
          <option value="personal">Personal pickup</option>
        </select>
      </div>
      <button type="submit" className="btn-primary">
        Next
      </button>
    </form>
  );
};

ShippingDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default ShippingDetails;
