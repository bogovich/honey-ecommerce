import { useState, useRef } from "react";
import ContactInfo from "../components/ContactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

const ContactPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        if (formRef.current) {
            formRef.current.reset();
            setFormData(initialFormData);
          }
      }, 5500);
    }, 1200);
    console.log(formData);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="contact-page">
      <h1 className="contact-page__title">Contact Us</h1>
      <p className="contact-page__intro">
        Get in touch with us! Whether you have questions about our honey, need
        assistance with an order, or just want to say hello, we&apos;d love to
        hear from you.
      </p>

      <div className="contact-page__content">
        <ContactInfo />

        <form ref={formRef} onSubmit={handleSubmit} className="form contact-page__form">
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={formData.name}
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={formData.email}
              id="email"
              name="email"
              onChange={handleChange}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <div className="form__group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              id="phone"
              name="phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              value={formData.message}
              id="message"
              name="message"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
          {(sending || sent) && (
            <div className="contact__page-form-status">
              {sending ? (
                <div className="contact__page-form-confirmation-message">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    spin
                    className="contact__page-form-confirmation-message-icon"
                  />
                  <p>Your message is being sent..</p>
                </div>
              ) : sent ? (
                <div className="contact__page-form-confirmation-message">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="contact__page-form-confirmation-message-icon"
                  />
                  <p>
                    Thank you for reaching out! Your message has been sent
                    successfully. We will get back to you shortly.
                  </p>
                </div>
              ) : null}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
