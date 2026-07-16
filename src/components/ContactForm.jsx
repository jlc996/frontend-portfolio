// ContactForm.jsx

import { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Success message
  const [submitted, setSubmitted] = useState(false);

  // Update form fields
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Submit form
  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="contact-form-section">

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label htmlFor="name">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          />

        </div>

        <button
          type="submit"
          className="button primary-button"
        >
          Send Message
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been sent.
          </p>
        )}

      </form>

    </section>
  );
}

export default ContactForm;