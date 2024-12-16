
import { TypeAnimation } from "react-type-animation";
import "./hero.css"; // Styles in a separate CSS file
import img1 from "../../assets/imagepro.png";
import { motion } from "motion/react";
import consoleImage from "../../assets/console.png";
import bookImage from "../../assets/book.png";

const Hero = () => {
  
  return (
    <div className="hero">
      {/* Central content with image */}
      <div className="image-container">
        {/* Circular Image */}
        <img src={img1} alt="Profile" className="center-image" />
      </div>

      {/* Heading and Animation */}
      <h1 className="hTitle">
        <div className="textHtitle">
          Hiee <span className="blog-title-emoji">👋</span>
          <br />
          My name is Shubham
        </div>

        <TypeAnimation
          sequence={[
            "I am a Software Developer .", // Types full sentence
            2000, // Waits 2 seconds
            "I am a Full Stack Developer .", // Replaces "Software" with "Web"
            2000, // Waits 2 seconds
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
      </h1>

      {/* Draggable Console */}
      <motion.div
  className="draggable-console"
  drag
  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
  dragConstraints={{
    top: 0,
    left: 0,
    right: "100%",
    bottom: "100%",
  }}
  style={{
    position: "absolute",
    top: 50,
    left: 25,
    zIndex: 10,
  }}
>
  <img src={consoleImage} alt="Console" className="console-image" />
</motion.div>

<motion.div
  className="draggable-book"
  drag
  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
  dragConstraints={{
    top: 0,
    left: 0,
    right: "100%",
    bottom: "100%",
  }}
  style={{
    position: "absolute",
    top: 50,
    right: 25,
    zIndex: 10,
  }}
>
  <img src={bookImage} alt="Book" className="book-image" />
</motion.div>

    </div>
  );
};

export default Hero;
