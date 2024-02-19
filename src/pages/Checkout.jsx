import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CheckoutSteps } from "../components";
import { ShippingDetails, PaymentDetails, OrderOverview, OrderConfirmation } from "../components";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const cart = useSelector((state) => state.cartReducer.cart);
  const [formData, setFormData] = useState({
    shippingDetails: {
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      shippingType: "postal",
    },
    paymentDetails: {
      name: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
    cart: {},
  });

  console.log(formData);

  useEffect(() => {
    setFormData((prevState) => ({ ...prevState, cart: cart }));
  }, [cart]);


  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const updateFormData = (data) => setFormData({ ...formData, ...data });

  return (
    <section className="checkout">
      <div className="checkout__title">
        <h1 className="checkout__title">Checkout</h1>
        <small>
          <em>Not a real checkout. Fake data is welcome.</em>
        </small>
      </div>
      <CheckoutSteps currentStep={step} />
      <div className="checkout__form">
        <div className="checkout__form__step">
          {step === 1 && (
            <ShippingDetails
              updateFormData={updateFormData}
              nextStep={nextStep}
              formData={formData.shippingDetails}
            />
          )}
          {step === 2 && (
            <PaymentDetails
              updateFormData={updateFormData}
              prevStep={prevStep}
              nextStep={nextStep}
              formData={formData.paymentDetails}
            />
          )}
          {step === 3 && <OrderOverview nextStep={nextStep} prevStep={prevStep} formData={formData} updateFormData={updateFormData} />}
          {step === 4 && <OrderConfirmation />}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
