import "./WhyChooseUs.css";
import { FaAward, FaUsers, FaLeaf, FaHeart } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose">

      <div className="section-title">
        <h5>WHY CHOOSE US</h5>
        <h2>Why Clients Love Our Salon</h2>
        <p>
          We provide premium beauty services with experienced professionals,
          quality products, and personalized care.
        </p>
      </div>

      <div className="choose-grid">

        <div className="choose-card">
          <FaAward className="icon" />
          <h3>Expert Stylists</h3>
          <p>Highly trained professionals with years of experience.</p>
        </div>

        <div className="choose-card">
          <FaUsers className="icon" />
          <h3>Happy Clients</h3>
          <p>Thousands of satisfied customers trust our services.</p>
        </div>

        <div className="choose-card">
          <FaLeaf className="icon" />
          <h3>Premium Products</h3>
          <p>We use only high-quality and skin-friendly products.</p>
        </div>

        <div className="choose-card">
          <FaHeart className="icon" />
          <h3>Customer Care</h3>
          <p>Your satisfaction is our highest priority every visit.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;