// ContactForm.jsx

import { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  // Store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Track form submission status
  const [submitted, setSubmitted] = useState(false);

  // Track loading state while the form is submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Store any submission errors
  const [error, setError] = useState("");

  // Update form fields
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Hide messages when the user starts typing again
    setSubmitted(false);
    setError("");
  }

  // Submit form to Web3Forms
  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Show success message
        setSubmitted(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setError(
          "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setError(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="contact-form-section">
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
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

        {/* Email Field */}
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

        {/* Message Field */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="button primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {submitted && (
          <p
            className="success-message"
            role="status"
          >
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p
            className="error-message"
            role="alert"
          >
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactForm;