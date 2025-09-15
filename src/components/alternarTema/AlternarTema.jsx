import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import "./AlternarTema.css";

function AlternarTema() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Ver si el usuario ya tenía guardado un tema
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
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
