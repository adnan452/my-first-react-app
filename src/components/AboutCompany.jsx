import "./AboutCompany.css";
import aboutImage from "../assets/about-company.jpg";

function AboutCompany() {
  return (
    <section className="about-company">

      <div className="about-left">

        <span className="sub-title">ABOUT COMPANY</span>

        <h2>We Create Beauty & Confidence</h2>

        <p>
          We are committed to providing premium salon and beauty services.
          Our experienced team delivers personalized treatments to help you
          look and feel your best.
        </p>

        <p>
          From hair styling to skincare, we use high-quality products and
          the latest techniques to ensure the best results.
        </p>

        <button>Read More</button>

      </div>

      <div className="about-right">
        <img src={aboutImage} alt="About Company" />
      </div>

    </section>
  );
}

export default AboutCompany;