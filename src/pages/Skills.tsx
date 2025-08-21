import react from '../assets/images/react.png'
import html from '../assets/images/html.png'
import css from '../assets/images/CSS.png'
import git from '../assets/images/git.png'
import javascript from '../assets/images/javascript.png'
import { motion } from "framer-motion";
import './Skill.css'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
       className="skill">Skills</motion.h1>
      <motion.div className="grid-container" variants={containerVariants}>
        
        <motion.div className="skills" variants={itemVariants}>
          <img src={html} alt="HTML" className="imgs" />
          <h3>HTML</h3>
          <p>
            I have solid experience working with HTML, building the foundation of responsive and accessible web pages. I understand how to structure content effectively using semantic tags, ensuring that websites are user-friendly.
          </p>
        </motion.div>

        <motion.div className="skills" variants={itemVariants}>
          <img src={css} alt="CSS" className="imgs" />
          <h3>CSS</h3>
          <p>
            Writing clean, reusable, and maintainable styles is something I value, as it helps me deliver interfaces that are both attractive and consistent.
          </p>
        </motion.div>

        <motion.div className="skills" variants={itemVariants}>
          <img src={react} alt="React" className="imgs" />
          <h3>React</h3>
          <p>
            I’ve gained hands-on experience working with React and React Native, where I’ve built projects that brought my ideas to life across web and mobile platforms.
          </p>
        </motion.div>

        <motion.div className="skills" variants={itemVariants}>
          <img src={git} alt="Git" className="imgs" />
          <h3>Git</h3>
          <p>
            I have practical experience using Git for version control, which has been essential in managing and collaborating on projects.
          </p>
        </motion.div>

        <motion.div className="skills" variants={itemVariants}>
          <img src={javascript} alt="JavaScript" className="imgs" />
          <h3>JavaScript</h3>
          <p>
            I have solid experience working with JavaScript, which I use to make web applications interactive and dynamic.
          </p>
        </motion.div>

        <motion.div className="skills" variants={itemVariants}>
          <img src={react} alt="React Native" className="imgs" />
          <h3>React Native</h3>
          <p>
            I’ve gained hands-on experience working with React and React Native, where I’ve built projects that brought my ideas to life across web and mobile platforms.
          </p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Skills;
