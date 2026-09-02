import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      {/* Left Side */}
      <div className="contact-info">

        <h2>Get In Touch</h2>

        <p>
          We'd love to hear from you. Fill out the form and our team
          will get back to you as soon as possible.
        </p>

        <div className="info-box">
          <h4>📍 Address</h4>
          <p>New York, USA</p>
        </div>

        <div className="info-box">
          <h4>📞 Phone</h4>
          <p>+1 234 567 890</p>
        </div>

        <div className="info-box">
          <h4>📧 Email</h4>
          <p>info@example.com</p>
        </div>

      </div>

      {/* Right Side */}

      <div className="contact-form">

        <h2>Send Message</h2>

        <form>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;