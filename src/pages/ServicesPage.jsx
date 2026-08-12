import "./ServicesPage.css";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import BackButton from "../components/backbutton/BackButton";
import FAQ from "../components/faq/FAQ";

const ServicesPage = () => {
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
              {/* PLAN INICIAL */}
              <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="0">
                <div className="plan-card">
                  <div className="plan-header">
                    <span className="plan-number">01</span>
                    <h3>Plan Inicial</h3>
                    <p>Para emprendedores</p>
                  </div>

                  <div className="plan-content">
                    <p className="plan-description">
                      Una solución ideal para quienes necesitan una presencia
                      online profesional para presentar su negocio y facilitar
                      el contacto con sus clientes.
                    </p>

                    <ul className="plan-list">
                      <li>Diseño personalizado</li>
                      <li>Diseño responsive</li>
                      <li>Hasta 4 secciones</li>
                      <li>Formulario de contacto</li>
                      <li>Redes sociales</li>
                      <li>Google Maps</li>
                      <li>SEO básico</li>
                      <li>Optimización básica</li>
                      <li>Publicación del sitio</li>
                    </ul>

                    <div className="plan-info">
                      <p>
                        <strong>Entrega:</strong> 5 a 7 días
                      </p>
                      <p>
                        <strong>Revisiones:</strong> 2
                      </p>
                      <p>
                        <strong>Soporte:</strong> 7 días
                      </p>
                    </div>

                    <a
                      href="https://wa.me/5493816135750?text=Hola!%20Estoy%20interesado%20en%20el%20Plan%20Inicial.%20Me%20gustaría%20recibir%20más%20información."
                      className="plan-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                    </a>

                    <Button className="plan-details-button">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Col>

              {/* PLAN PROFESIONAL */}
              <Col md={6} lg={4} data-aos="fade-up" data-aos-delay="100">
                <div className="plan-card plan-card-featured">
                  <div className="plan-badge">Más elegido</div>

                  <div className="plan-header">
                    <span className="plan-number">02</span>
                    <h3>Plan Profesional</h3>
                    <p>Ideal para negocios establecidos</p>
                  </div>

                  <div className="plan-content">
                    <p className="plan-description">
                      Una propuesta más completa para negocios que buscan una
                      web atractiva, dinámica y preparada para ofrecer una
                      experiencia profesional a sus clientes.
                    </p>

                    <p className="plan-includes">
                      Todo lo incluido en el Plan Inicial, más:
                    </p>

                    <ul className="plan-list">
                      <li>Hasta 7 secciones</li>
                      <li>Galería</li>
                      <li>Testimonios</li>
                      <li>Botón de WhatsApp</li>
                      <li>Preguntas frecuentes (FAQ)</li>
                      <li>Microanimaciones y transiciones suaves</li>
                      <li>SEO mejorado</li>
                      <li>Optimización más completa</li>
                    </ul>

                    <div className="plan-info">
                      <p>
                        <strong>Entrega:</strong> 7 a 15 días
                      </p>
                      <p>
                        <strong>Revisiones:</strong> 3
                      </p>
                      <p>
                        <strong>Soporte:</strong> 15 días
                      </p>
                    </div>

                    <a
                      href="https://wa.me/5493816135750?text=Hola!%20Estoy%20interesado%20en%20el%20Plan%20Profesional.%20Me%20gustaría%20recibir%20más%20información."
                      className="plan-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                    </a>

                    <Button className="plan-details-button">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Col>

              {/* PLAN PREMIUM */}
              <Col md={12} lg={4} data-aos="fade-up" data-aos-delay="200">
                <div className="plan-card">
                  <div className="plan-header">
                    <span className="plan-number">03</span>
                    <h3>Plan Premium</h3>
                    <p>Pensado para empresas</p>
                  </div>

                  <div className="plan-content">
                    <p className="plan-description">
                      Una solución pensada para proyectos que requieren una
                      presencia web más completa, optimizada y con
                      funcionalidades adicionales.
                    </p>

                    <p className="plan-includes">
                      Todo lo incluido en el Plan Profesional, más:
                    </p>

                    <ul className="plan-list">
                      <li>Hasta 10 secciones</li>
                      <li>Optimización avanzada</li>
                      <li>Animaciones avanzadas</li>
                      <li>SEO avanzado</li>
                      <li>Configuración de Google Analytics</li>
                      <li>Configuración de Google Search Console</li>
                    </ul>

                    <div className="plan-info">
                      <p>
                        <strong>Entrega:</strong> 10 a 20 días
                      </p>
                      <p>
                        <strong>Revisiones:</strong> 4
                      </p>
                      <p>
                        <strong>Soporte:</strong> 30 días
                      </p>
                    </div>

                    <a
                      href="https://wa.me/5493816135750?text=Hola!%20Estoy%20interesado%20en%20el%20Plan%20Premium.%20Me%20gustaría%20recibir%20más%20información."
                      className="plan-button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                    </a>

                    <Button className="plan-details-button">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>

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
