import React from 'react';
import type { MigrationType } from '../../../types';
import { MIGRATION_TYPES } from '../../../data/migrations';
import NotificationBanner from '../../../components/feedback/NotificationBanner';
import Badge from '../../../components/ui/Badge';
import './steps.css';

interface ReviewStepProps {
  readonly selectedType: MigrationType | null;
  readonly onEditStep: (step: number) => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ selectedType, onEditStep }) => {
  const typeInfo = MIGRATION_TYPES.find((t) => t.id === selectedType);

  return (
    <div>
      <h2 className="step-title">Review & Confirm</h2>
      <NotificationBanner variant="info">Typical migration time: 5–15 minutes</NotificationBanner>

      <div className="review-section">
        <div className="review-section__header">
          <span className="review-section__title">Migration Type</span>
          <button className="review-section__edit" onClick={() => onEditStep(1)}>✏️ Edit</button>
        </div>
        <div className="review-section__value">
          <Badge variant="primary">{typeInfo?.title ?? 'Not selected'}</Badge>
        </div>
      </div>

      <div className="review-section">
        <div className="review-section__header">
          <span className="review-section__title">Repository</span>
          <button className="review-section__edit" onClick={() => onEditStep(2)}>✏️ Edit</button>
        </div>
        <div className="review-section__value">
          <a href="#">bosch-engineering/sw-pkg-cc-eal-dac</a>
          <span style={{ margin: '0 var(--space-2)' }}>|</span>
          Branch: migration/doors-requirements-2024
          <Badge variant="success" className="badge" style={{ marginLeft: 'var(--space-2)' }}>New</Badge>
        </div>
      </div>

      <div className="review-section">
        <div className="review-section__header">
          <span className="review-section__title">Source Configuration</span>
          <button className="review-section__edit" onClick={() => onEditStep(3)}>✏️ Edit</button>
        </div>
        <div className="review-section__value">SW Package: CC_EAL • 2 modules configured</div>
      </div>

      <div className="review-section">
        <div className="review-section__header">
          <span className="review-section__title">Files</span>
          <button className="review-section__edit" onClick={() => onEditStep(4)}>✏️ Edit</button>
        </div>
        <div className="review-section__value">3 files — 23.1 MB</div>
      </div>

      <div className="review-section">
        <div className="review-section__header">
          <span className="review-section__title">Mapping</span>
          <button className="review-section__edit" onClick={() => onEditStep(5)}>✏️ Edit</button>
        </div>
        <div className="review-section__value">3 of 4 modules mapped</div>
      </div>
    </div>
  );
};

export default ReviewStep;
