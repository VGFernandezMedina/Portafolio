import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./AlternarTema.css";

function AlternarTema() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="theme-switch"
        label={theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}
        onChange={toggleTheme}
        checked={theme === "dark"}
        className="form-temas"
      />
    </Form>
  );
}

export default AlternarTema;
