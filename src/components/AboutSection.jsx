import "./About.css";
import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <section className="about">

      <div className="about-left">
        <h5>ABOUT US</h5>

        <h2>We Create Beautiful Hair Styles</h2>

        <p>
          We provide premium salon services with experienced stylists,
          modern techniques, and quality products to give you the perfect look.
        </p>

        <button>Read More</button>
      </div>

      <div className="about-right">
        <img src={aboutImage} alt="About" />
      </div>

    </section>
  );
}

export default About;