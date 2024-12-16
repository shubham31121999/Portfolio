
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import "./techstack.css"; // Custom CSS for styling

const TechStack = () => {
  const settings = {
    dots: true, // Navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="tech-stack-container py-12">
      <Slider {...settings}>
        {/* Frontend Section */}
        <div className="tech-stack-section">
          <h3 className="text-white text-3xl mb-4">Frontend</h3>
          <div className="tech-images flex justify-center space-x-8">
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">React.js</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JavaScript"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">JavaScript</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/CSS3_logo.svg"
                alt="CSS3"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">CSS3</p>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="tech-stack-section">
          <h3 className="text-white text-3xl mb-4">Backend</h3>
          <div className="tech-images flex justify-center space-x-8">
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Node.js_logo.svg"
                alt="Node.js"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">Node.js</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/Flask_logo.png"
                alt="Flask"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">Flask</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Python_logo_2020.svg"
                alt="Python"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">Python</p>
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="tech-stack-section">
          <h3 className="text-white text-3xl mb-4">Database</h3>
          <div className="tech-images flex justify-center space-x-8">
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/MySQL_logo.svg"
                alt="MySQL"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">MySQL</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/29/MongoDB_Logo_2019.svg"
                alt="MongoDB"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">MongoDB</p>
            </div>
            <div className="tech-item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/Postgresql_elephant.svg"
                alt="PostgreSQL"
                className="tech-image"
              />
              <p className="text-center text-white mt-2">PostgreSQL</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TechStack;
