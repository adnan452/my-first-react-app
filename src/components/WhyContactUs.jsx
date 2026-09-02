import "./WhyContactUs.css";

function WhyContactUs() {
  return (
    <section className="why-contact">

      <div className="section-title">
        <span>WHY CHOOSE US</span>
        <h2>Why Contact Our Team?</h2>
        <p>
          We're committed to providing fast, friendly, and reliable support
          whenever you need us.
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <div className="icon">📞</div>
          <h3>Quick Response</h3>
          <p>
            Our team responds to all inquiries as quickly as possible.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">🤝</div>
          <h3>Friendly Support</h3>
          <p>
            We believe in providing helpful and personalized customer service.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">🌍</div>
          <h3>Trusted Service</h3>
          <p>
            Customers trust us for quality service and reliable communication.
          </p>
        </div>

      </div>

    </section>
  );
}

export default WhyContactUs;