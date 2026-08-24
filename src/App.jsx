import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import HomePage from "./pages/HomePage";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import AllProjects from "./pages/AllProjects";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import AnalyticsTracker from "./components/ga4/AnalyticsTracker";

import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(() => {
    return (
      window.location.pathname === "/" &&
      !sessionStorage.getItem("preloaderShown")
    );
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.onload = () => {
      window.particlesJS.load("particles-js", "/particles.json");
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        easing: "ease-out",
      });
    }
  }, [loading]);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("preloaderShown", "true");
    setLoading(false);
  };

  return (
    <div className="bg-homepage">
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div
        id="particles-js"
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>

      <Router>
        <NavbarC />
        <ScrollToTop />
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<AllProjects />} />
          <Route path="/proyectos/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
