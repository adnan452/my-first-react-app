import "./ContactHero.css";
import heroImage from "../assets/about-banner.jpg";

function ContactHero() {
  return (
    <section
      className="contact-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="banner-overlay">
        <h1>Contact Us</h1>
        <p>Home / Contact Us</p>
      </div>
    </section>
  );
}

export default ContactHero;