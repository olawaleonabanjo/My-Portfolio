import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
// import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    className="page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      {/* <AnimatePresence mode="wait"> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          {/* <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} /> */}
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          {/* <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} /> */}
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      {/* </AnimatePresence> */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

