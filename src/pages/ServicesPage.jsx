import { Link } from "react-router-dom";
import "./ServicesPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <Container fluid className="py-4 px-0">
      <Row className="p-0 m-0 justify-content-center">
        <Col lg="10" className="">
          <Link to={-1} className="return-link text-decoration-none text-white">
            <div className="div-return">
              <FaArrowLeft />
              <p className="my-0">Volver</p>
            </div>
          </Link>
          <div className="title-div-detail-page">
            <p className="p1-title" data-aos="fade-up" data-aos-duration="800">
              Servicios y planes
            </p>
            <h1
              className="title-detail-page"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Elegí el plan ideal para tu negocio
            </h1>
            <p
              className="mt-4 p1-description"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
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
                      <li>Botón de WhatsApp</li>
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

                    <Link to="https://wa.me/TUNUMERO" className="plan-button">
                      Consultar por WhatsApp
                    </Link>
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
                      <li>Preguntas frecuentes</li>
                      <li>Animaciones</li>
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

                    <Link to="https://wa.me/TUNUMERO" className="plan-button">
                      Consultar por WhatsApp
                    </Link>
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
                      <li>Integración con EmailJS</li>
                      <li>SEO inicial</li>
                      <li>Optimización avanzada</li>
                      <li>Animaciones avanzadas</li>
                      <li>Capacitación para editar contenidos</li>
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

                    <Link to="https://wa.me/TUNUMERO" className="plan-button">
                      Consultar por WhatsApp
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>

            <p
              className="planes-extra-info"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              ¿Necesitás algo diferente? Los servicios adicionales y
              funcionalidades que no estén contempladas en el plan elegido se
              cotizan por separado según las necesidades del proyecto.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesPage;
