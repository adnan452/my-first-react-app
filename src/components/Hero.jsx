import "./Hero.css";
import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay">
        <h1>Welcome to Digicaptain Technologies</h1>

        <p>Learn React by Building Real Projects.</p>

        <button>Get Started</button>
      </div>
    </section>
  );
}

export default Hero;