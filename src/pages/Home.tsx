import { motion } from "framer-motion";
import MyPic from '../assets/images/my-picture.png';
import './Home.css'
import Contact from "./Contact";
// import About from "./About";
// import Skills from "./Skills";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";


const name = "Onabanjo Olawale";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + name[index]);
        setIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div>

    <div className="home">
        <div className="section1">
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                 Hi, I'm <br />
                    <motion.span
                    key={displayText} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="highlight"
                    >
                    {displayText}
                    </motion.span>
                    
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
            >
               I am Onabanjo Olawale, a Frontend Developer with a passion for creating beautiful and functional web applications. I specialize in React and React Native for building frontend mobile applications and have experience with various frontend technologies. Welcome to my portfolio, where you can explore my projects and learn more about my work.
            </motion.p>
            
                <Link to="/about" className="btn">
                Learn more about me <FaArrowRight />
            </Link>
            
        </div>
        <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }} 
                className="section2">
             <img 
                src={MyPic} 
                alt="olawale onabanjo" 
                className="image" 
      />
        </motion.div>
        
    </div>
        {/* <About />
        <Skills /> */}
        <Contact />
     </div>
  );
}
