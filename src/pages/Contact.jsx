import { useState, useRef } from "react";
import { ContactForm, ContactInfo } from "../components";

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

        <ContactForm 
          formData={formData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
          sending={sending} 
          sent={sent} 
          formRef={formRef} 
        />
      </div>
    </section>
  );
};

export default ContactPage;
