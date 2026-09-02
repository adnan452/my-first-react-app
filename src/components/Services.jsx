import "./Services.css";

function Services() {
  return (
    <section className="services">

      <div className="service-heading">
        <h5>OUR SERVICES</h5>
        <h2>Premium Salon Services</h2>
        <p>
          We offer professional beauty and hair care services
          to help you look and feel your best.
        </p>
      </div>

      <div className="service-container">

        <div className="service-card">
          <h3>Hair Cut</h3>
          <p>Professional haircut for men and women.</p>
          <button>Read More</button>
        </div>

        <div className="service-card">
          <h3>Hair Color</h3>
          <p>Premium hair coloring with modern techniques.</p>
          <button>Read More</button>
        </div>

        <div className="service-card">
          <h3>Makeup</h3>
          <p>Bridal and party makeup by experts.</p>
          <button>Read More</button>
        </div>

        <div className="service-card">
          <h3>Facial</h3>
          <p>Glow and skin care treatments.</p>
          <button>Read More</button>
        </div>

      </div>

    </section>
  );
}

export default Services;