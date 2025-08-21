import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <footer className="footer">
           <div className="footer-content">
                <h2 className="footer-header">Portfolio</h2>
                <div className="footer-link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                </div>
      </div>
      <div className="social">
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons"
                >
                  <FaGithub />
                </a>
                </div>
            <div className="footer-text">
            <p>&copy; {new Date().getFullYear()} Onabanjo Olawale. All rights reserved.</p>
            <p>Designed and Developed by Onabanjo Olawale</p>
            </div>
        </footer>
    </div>
  )
}
export default Footer;