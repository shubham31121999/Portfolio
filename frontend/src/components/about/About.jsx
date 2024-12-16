import "./about.css"
import TechStack from "../techstack/Techstack";
const About = () => {
  return (
    <div className="about-me-container">
      {/* About Me Section */}
      <div className="about-me-text">
        <h1>About Me</h1>
        <p>
          Hi! Im [Your Name], a passionate developer specializing in crafting
          modern and efficient web applications. I have a deep interest in
          building user-friendly interfaces and scalable backend systems.
        </p>
        <p>
          Over the years, I’ve gained expertise in a variety of tools and
          technologies, which I leverage to deliver high-quality software
          solutions. Outside of coding, I enjoy exploring new tech, playing
          games, and experimenting with creative ideas.
        </p>
      </div>

      {/* Call Tech Stack Component */}
      <div className="tech-stack-wrapper">
        <h2>My Tech Stack</h2>
        <TechStack />
      </div>
    </div>
  );
};

export default About
