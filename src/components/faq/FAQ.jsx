import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";

const questions = [
  {
    question: "¿Cuánto tarda en hacerse un sitio web?",
    answer:
      "El tiempo depende del tipo de proyecto, la cantidad de secciones y las funcionalidades que necesite. Antes de comenzar definimos un plazo estimado según el plan elegido.",
  },
  {
    question: "¿Qué necesito proporcionar para comenzar?",
    answer:
      "Principalmente información sobre tu negocio, textos, imágenes, redes sociales y cualquier otro contenido que quieras incluir en el sitio. Si todavía no tenés todo definido, podemos organizarlo juntos.",
  },
  {
    question: "¿El sitio se adapta a celulares y tablets?",
    answer:
      "Sí. Todos los sitios se desarrollan con diseño responsive para que puedan visualizarse y utilizarse correctamente desde celulares, tablets y computadoras.",
  },
  {
    question: "¿Puedo solicitar cambios durante el desarrollo?",
    answer:
      "Sí. Cada plan incluye una cantidad determinada de revisiones. Durante esas instancias podés solicitar modificaciones sobre el proyecto de acuerdo con lo establecido en el plan contratado.",
  },
  {
    question: "¿El dominio y hosting están incluidos?",
    answer:
      "La configuración y publicación del sitio están incluidas en los planes. El dominio y el servicio de hosting son contratados y abonados por el cliente, y su costo depende del proveedor y de las necesidades del proyecto.",
  },
  {
    question: "¿Qué sucede después de publicar mi sitio?",
    answer:
      "Una vez publicado, verifico que todo funcione correctamente. Además, cada plan incluye un período de soporte para resolver posibles inconvenientes relacionados con el proyecto y su publicación.",
  },
];

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2>Preguntas frecuentes</h2>

        <p>
          Algunas respuestas a las dudas más comunes antes de comenzar un
          proyecto.
        </p>
      </div>

      <Accordion className="faq-accordion">
        {questions.map((item, index) => (
          <Accordion.Item eventKey={String(index)} key={item.question}>
            <Accordion.Header>
              <span>{item.question}</span>
            </Accordion.Header>

            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
