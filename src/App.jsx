import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavbarC from "./components/navbar/NavbarC";

const App = () => {
  return (
    <div className="bg-homepage">
      <Router>
        {/* <NavbarC /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
