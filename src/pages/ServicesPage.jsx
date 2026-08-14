import "./ServicesPage.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import BackButton from "../components/backbutton/BackButton";
import FAQ from "../components/faq/FAQ";
import { useState } from "react";
import PlanModal from "../components/planmodal/PlanModal";

const plans = [
  {
    number: "01",
    title: "Plan Inicial",
    subtitle: "Para emprendedores",

    description:
      "Una solución ideal para quienes necesitan una presencia online profesional para presentar su negocio y facilitar el contacto con sus clientes.",

    details: [
      {
        title: "1 página de hasta 4 secciones",
        description:
          "Una única página organizada en hasta 4 secciones principales, como Inicio, Servicios, Sobre Nosotros y Contacto.",
      },
      {
        title: "Diseño personalizado y responsive",
        description:
          "El sitio se adapta a celulares, tablets y computadoras, manteniendo una experiencia visual consistente.",
      },
      {
        title: "Formulario de contacto",
        description:
          "Formulario integrado para facilitar que los visitantes puedan realizar consultas desde el sitio.",
      },
      {
        title: "WhatsApp y redes sociales",
        description:
          "Integración de botones y enlaces para facilitar el contacto y conectar el sitio con tus redes sociales.",
      },
      {
        title: "Google Maps",
        description:
          "Integración del mapa para mostrar la ubicación física de tu negocio cuando sea necesario.",
      },
      {
        title: "SEO básico",
        description:
          "Configuración de elementos fundamentales del sitio para facilitar su indexación y comprensión por parte de los buscadores.",
      },
      {
        title: "Optimización básica",
        description:
          "Optimización general del sitio para favorecer una buena velocidad de carga y experiencia de usuario.",
      },
      {
        title: "Publicación del sitio",
        description:
          "Configuración y publicación del proyecto para dejarlo disponible online.",
      },
    ],

    delivery: "5 a 7 días",
    revisions: "2",
    support: "7 días",

    whatsapp:
      "https://wa.me/5493816135750?text=Hola%20Gabriel,%20estoy%20interesado%20en%20el%20Plan%20Inicial.",
  },

  {
    number: "02",
    title: "Plan Profesional",
    subtitle: "Ideal para negocios establecidos",

    description:
      "Una propuesta más completa para negocios que buscan una web atractiva, dinámica y preparada para ofrecer una experiencia profesional a sus clientes.",

    details: [
      {
        title: "Hasta 3 páginas",
        description:
          "Sitio multipágina con hasta 3 páginas independientes, organizadas según las necesidades del proyecto.",
      },
      {
        title: "Hasta 8 secciones totales",
        description:
          "Las secciones se distribuyen entre las páginas incluidas en el proyecto.",
      },
      {
        title: "Galería",
        description:
          "Presentación organizada de imágenes o contenido visual relacionado con tu negocio.",
      },
      {
        title: "Testimonios",
        description:
          "Sección para mostrar opiniones y experiencias de clientes.",
      },
      {
        title: "Preguntas frecuentes (FAQ)",
        description:
          "Sección destinada a responder las consultas más habituales de los visitantes.",
      },
      {
        title: "WhatsApp flotante",
        description:
          "Botón de WhatsApp visible durante la navegación para facilitar el contacto desde cualquier parte del sitio.",
      },
      {
        title: "Microanimaciones y transiciones suaves",
        description:
          "Animaciones sutiles para mejorar la interacción y aportar una experiencia más dinámica.",
      },
      {
        title: "SEO mejorado",
        description:
          "Configuraciones adicionales orientadas a mejorar la estructura y visibilidad del sitio en buscadores.",
      },
      {
        title: "Optimización más completa",
        description:
          "Optimización adicional de recursos y estructura para mejorar el rendimiento general del sitio.",
      },
    ],

    delivery: "7 a 15 días",
    revisions: "3",
    support: "15 días",

    whatsapp:
      "https://wa.me/5493816135750?text=Hola%20Gabriel,%20estoy%20interesado%20en%20el%20Plan%20Profesional.",
  },

  {
    number: "03",
    title: "Plan Premium",
    subtitle: "Pensado para empresas",

    description:
      "Una solución pensada para proyectos que requieren una presencia web más completa, optimizada y con funcionalidades adicionales.",

    details: [
      {
        title: "Hasta 5 páginas",
        description:
          "Sitio multipágina con hasta 5 páginas independientes para organizar de forma completa la información del negocio.",
      },
      {
        title: "Hasta 12 secciones totales",
        description:
          "Las secciones se distribuyen entre las páginas incluidas en el proyecto.",
      },
      {
        title: "Google Analytics",
        description:
          "Configuración de Google Analytics para obtener información sobre el comportamiento y las visitas del sitio.",
      },
      {
        title: "Google Search Console",
        description:
          "Configuración de Search Console para facilitar el seguimiento de la presencia del sitio en los resultados de búsqueda.",
      },
      {
        title: "SEO avanzado",
        description:
          "Configuraciones SEO adicionales orientadas a mejorar la estructura, indexación y visibilidad del sitio.",
      },
      {
        title: "Animaciones avanzadas",
        description:
          "Animaciones y efectos de interacción más elaborados para proyectos que requieren una experiencia visual más dinámica.",
      },
      {
        title: "Optimización avanzada",
        description:
          "Optimización más profunda del sitio para mejorar rendimiento, carga y experiencia de usuario.",
      },
    ],

    delivery: "10 a 20 días",
    revisions: "4",
    support: "30 días",

    whatsapp:
      "https://wa.me/5493816135750?text=Hola%20Gabriel,%20estoy%20interesado%20en%20el%20Plan%20Premium.",
  },
];

const ServicesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <Container fluid className="py-4 px-0">
      <Row className="p-0 m-0 justify-content-center">
        <Col lg="10" className="">
          <BackButton />
          <div
            className="title-div-detail-page"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <p className="p1-title">Servicios y planes</p>
            <h1 className="title-detail-page">
              Elegí el plan ideal para tu negocio
            </h1>
            <p className="mt-4 p1-description">
              Todos los planes están pensados para ofrecer una presencia online
              profesional y adaptada a las necesidades de cada proyecto.
            </p>
          </div>
          <div className="planes-section">
            <Row className="g-4">
              {plans.map((plan, index) => (
                <Col
                  md={6}
                  lg={4}
                  key={plan.number}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`plan-card ${
                      plan.number === "02" ? "plan-card-featured" : ""
                    }`}
                  >
                    {plan.number === "02" && (
                      <div className="plan-badge">Más elegido</div>
                    )}
                    <div className="plan-header">
                      <span className="plan-number">{plan.number}</span>
                      <h3>{plan.title}</h3>
                      <p>{plan.subtitle}</p>
                    </div>
                    <div className="plan-content">
                      <p className="plan-description">{plan.description}</p>
                      {plan.number !== "01" && (
                        <p className="plan-includes">
                          Todo lo incluido en el{" "}
                          {plan.number === "02"
                            ? "Plan Inicial"
                            : "Plan Profesional"}
                          , más:
                        </p>
                      )}
                      <ul className="plan-list">
                        {plan.details
                          .slice(0, plan.number === "01" ? 10 : 7)
                          .map((detail) => (
                            <li key={detail.title}>{detail.title}</li>
                          ))}
                      </ul>
                      {/* <div className="plan-info">
                        <p>
                          <strong>Entrega:</strong> {plan.delivery}
                        </p>
                        <p>
                          <strong>Revisiones:</strong> {plan.revisions}
                        </p>
                        <p>
                          <strong>Soporte:</strong> {plan.support}
                        </p>
                      </div> */}
                      <Button
                        className="plan-details-button"
                        onClick={() => setSelectedPlan(plan)}
                      >
                        Ver detalles
                      </Button>
                      <a
                        href={plan.whatsapp}
                        className="plan-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consultar por WhatsApp
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <PlanModal
              show={selectedPlan !== null}
              onHide={() => setSelectedPlan(null)}
              plan={selectedPlan}
            />
            <p className="planes-extra-info">
              ¿Necesitás algo diferente? Los servicios adicionales y
              funcionalidades que no estén contempladas en el plan elegido se
              cotizan por separado según las necesidades del proyecto.
            </p>
            <FAQ />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
