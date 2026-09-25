import { projectAssets } from "../../../constants/assets";

interface ProjectModalProps {
  onClose: () => void;
}

export function ProjectModal({ onClose }: ProjectModalProps) {
  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="modal-info">
          <div className="project-icon">
            <img src={projectAssets.diggers} alt="" />
          </div>
          <div className="project-copy">
            <h3 id="project-modal-title">Diggers Factory</h3>
            <p>Alternance (2026)</p>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            ×
          </button>
        </div>
        <div className="modal-images">
          <div className="modal-image-main">
            <img
              src={projectAssets.diggersImage}
              alt="Interface Diggers Factory"
            />
          </div>
          <div className="modal-image-column">
            <img src={projectAssets.modalExtra1} alt="Écran Diggers Factory" />
            <img
              src={projectAssets.modalExtra2}
              alt="Capture Diggers Factory"
            />
          </div>
        </div>
        <div className="project-modal-description">
          <p>
            Diggers Factory crée une meilleure façon pour les artistes et les
            fans de profiter de la musique physique.
          </p>
          <p className="project-meta">Stack : React.JS/Node.JS</p>
          <p className="project-meta">Durée : 10 mois (en cours)</p>
          <p className="project-meta">Poste : Testeur QA</p>
          <p className="project-meta modal-role">
            • Écrire, maintenir et améliorer les tests End-to-End couvrant les
            parcours critiques du produit.
            <br />
            • Réaliser des tests fonctionnels rapides lors des déploiements en
            staging.
            <br />
            • Contribuer à la qualité du code via les tests unitaires.
            <br />
            • Identifier, reproduire et remonter les anomalies.
            <br />
            • Collaborer avec les développeurs sur les scénarios et workflows.
            <br />
            • Documenter les scénarios de test et les workflows automatisés.
            <br />• Participer ponctuellement au développement.
          </p>
        </div>
      </div>
    </div>
  );
}
