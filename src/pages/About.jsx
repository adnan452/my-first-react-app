import "./About.css";
import banner from "../assets/about-banner.jpg";
import AboutCompany from "../components/AboutCompany";
import WhyChooseUs from "../components/WhyChooseUs";

function About() {
  return (
    <>
      {/* Banner Section */}
      <section
        className="about-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-overlay">
          <h1>About Us</h1>
          <p>Home / About</p>
        </div>
      </section>

      {/* About Company Section */}
      <AboutCompany />
      <WhyChooseUs />
    </>
  );
}

export default About;