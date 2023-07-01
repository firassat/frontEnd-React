import "./Hero.css";
import Button1 from "../../component/Button/Button";
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcome To Cyborg</h6>
        <h4 className="hero-title">
          <span>BROWSE</span> OUR POPULAR GAMES HERE
        </h4>
        <Button1 title="Browse Now" />
      </div>
    </div>
  );
};

export default Hero;
