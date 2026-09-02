import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      {/* Left Side */}
      <div className="contact-info">
        <h5>CONTACT US</h5>
        <h2>Get In Touch</h2>

        <div className="info-box">
          <h4>📞 Phone</h4>
          <p>+1 (123) 456-7890</p>
        </div>

        <div className="info-box">
          <h4>✉ Email</h4>
          <p>info@example.com</p>
        </div>

        <div className="info-box">
          <h4>📍 Location</h4>
          <p>123 Main Street, New York, USA</p>
        </div>

        <div className="info-box">
          <h4>🕒 Working Hours</h4>
          <p>Mon - Sat : 9:00 AM - 7:00 PM</p>
        </div>

        <div className="info-box">
          <h4>🌐 Follow Us</h4>
          <p>Facebook | Instagram | LinkedIn</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-form">
        <form>

          <input type="text" placeholder="Your Name" required/>

          <input type="email" placeholder="Your Email" required/>

          <input type="text" placeholder="Phone Number"  required/>

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

export default Contact;