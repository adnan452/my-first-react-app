import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>LOGO</h2>
          <p>Build modern React websites with us.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 New York, USA</p>
          <p>📞 +1 234 567 890</p>
          <p>✉ info@example.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 My React Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;