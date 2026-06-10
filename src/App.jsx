import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnalyticsTracker from "./components/ga4/AnalyticsTracker";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.onload = () => {
      window.particlesJS.load("particles-js", "/particles.json");
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      offset: 10,
      easing: "ease-in-out",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  function Layout() {
    const location = useLocation();

    const isProjectDetail = location.pathname.startsWith("/project/");

    return (
      <>
        {!isProjectDetail && <NavbarC />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {!isProjectDetail && <Footer />}
      </>
    );
  }

  return (
    <div className="bg-homepage">
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
        <AnalyticsTracker />
        <Layout />
      </Router>
    </div>
  );
};

export default App;
