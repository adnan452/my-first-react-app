import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    const formData = new FormData(e.target);
    formData.append("access_key", "96ff3326-6eae-4054-a4a9-b188bbeba1ff");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! ✅");
        e.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
  };

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
        <form onSubmit={handleSubmit}>
          {/* Fixed Subject Hidden Field */}
          <input 
            type="hidden" 
            name="subject" 
            value="New Website Inquiry" 
          />

          {/* CC Email Hidden Field */}
          <input 
            type="hidden" 
            name="cc" 
            value="suyash@digicaptaintechnologies.com" 
          />

          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Phone Number" required />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {result && (
          <p style={{ marginTop: "15px", textAlign: "center", color: "#c79a53", fontWeight: "bold" }}>
            {result}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;