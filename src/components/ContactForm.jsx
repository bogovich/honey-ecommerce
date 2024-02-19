import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";


const ContactForm = ({ formData, handleChange, handleSubmit, sending, sent, formRef }) => {
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="form contact-page__form"
    >
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
  );
};

ContactForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  sending: PropTypes.bool.isRequired,
  sent: PropTypes.bool.isRequired,
  formRef: PropTypes.object.isRequired,
};

export default ContactForm;