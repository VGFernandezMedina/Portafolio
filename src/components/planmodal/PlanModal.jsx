import { Modal } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "./PlanModal.css";

const PlanModal = ({ show, onHide, plan }) => {
  if (!plan) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="plan-modal"
    >
      <Modal.Header closeButton>
        <div>
          <span className="modal-plan-number">{plan.number}</span>
          <Modal.Title>{plan.title}</Modal.Title>
          <p className="modal-plan-subtitle">{plan.subtitle}</p>
        </div>
      </Modal.Header>

      <Modal.Body>
        <p className="modal-plan-description">{plan.description}</p>
        <h5 className="modal-section-title">¿Qué incluye?</h5>
        <div className="modal-features">
          {plan.details.map((detail, index) => (
            <div className="modal-feature" key={index}>
              <FaCheck className="modal-check" />

              <div>
                <h6>{detail.title}</h6>
                <p>{detail.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-plan-info">
          <div>
            <strong>Entrega</strong>
            <span>{plan.delivery}</span>
          </div>

          <div>
            <strong>Revisiones</strong>
            <span>{plan.revisions}</span>
          </div>

          <div>
            <strong>Soporte</strong>
            <span>{plan.support}</span>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          className="btn-modal-whatsapp"
          onClick={() => {
            window.open(plan.whatsapp, "_blank", "noopener,noreferrer");
          }}
        >
          Consultar por WhatsApp
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PlanModal;
