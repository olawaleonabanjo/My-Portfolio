import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { FiX } from "react-icons/fi";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="container">
        {/* Hamburger / Close button */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <HiMenuAlt3 />}
        </div>

        <AnimatePresence>
          {/* {isOpen && ( */}
            <motion.div
              className={`nav-links ${ isOpen ? 'is-open' : '' }`}
              ref={menuRef}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
                About
              </NavLink>
              <NavLink to="/skills" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
                Skills
              </NavLink>
              <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => isActive ? "active-link" : ""}>
                Contact
              </NavLink>
            </motion.div>
          {/* )} */}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
