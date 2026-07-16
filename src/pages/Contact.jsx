import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="contact">

      <header className="contact-header">
        <h1>Contact Me</h1>

        <p>
          Have a question or want to discuss a project?
          I'd love to hear from you.
        </p>
      </header>

      <ContactForm />

    </section>
  );
}

export default Contact;