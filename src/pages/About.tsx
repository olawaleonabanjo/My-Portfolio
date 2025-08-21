import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import MyPic from '../assets/images/my-picture.png';
import { motion } from "framer-motion";
import './About.css'

const About = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }} 
    >
      <h1 className='about-h'>About Me</h1>
    <div className='about-container'>
      <div className="img">
        <img 
                src={MyPic} 
                alt="olawale onabanjo" 
                className="pic" 
      />
      </div>
      <div className="about">
        <p>
          As a Frontend Developer, I bring ideas to life through elegant design and efficient code. My core expertise lies in React for the web and React Native for mobile, enabling me to craft seamless experiences that perform beautifully across platforms.

          I am passionate about turning complex problems into simple, intuitive interfaces that not only look visually appealing but also deliver smooth and engaging user experiences. With a strong eye for detail and a dedication to clean, maintainable code, I strive to build applications that balance creativity, functionality, and performance.

          Beyond coding, I enjoy collaborating with designers, developers, and stakeholders to bring visions to reality—whether that’s a responsive website, a dynamic web app, or a fully functional mobile application. I thrive in environments that encourage learning, innovation, and problem-solving, and I’m always eager to explore new tools and technologies that push the boundaries of frontend development.

          At the heart of my work is a simple goal: to create digital products that people enjoy using, while continuously improving my craft as a developer.
        </p>
        <Link to="/contact" className="about-btn">
                Contact me <FaArrowRight />
            </Link>
      </div>
    </div>
    </motion.div>
  )
}
export default About;
