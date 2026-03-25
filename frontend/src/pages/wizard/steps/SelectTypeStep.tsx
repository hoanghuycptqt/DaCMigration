import React from 'react';
import type { MigrationType } from '../../../types';
import { MIGRATION_TYPES } from '../../../data/migrations';
import './steps.css';

interface SelectTypeStepProps {
  readonly selectedType: MigrationType | null;
  readonly onSelect: (type: MigrationType) => void;
}

const SelectTypeStep: React.FC<SelectTypeStepProps> = ({ selectedType, onSelect }) => {
  return (
    <div>
      <h2 className="step-title">Select Migration Type</h2>
      <div className="radio-card-grid">
        {MIGRATION_TYPES.map((type) => (
          <div
            key={type.id}
            className={`radio-card ${selectedType === type.id ? 'radio-card--selected' : ''}`}
            onClick={() => onSelect(type.id)}
          >
            <span className="radio-card__indicator">
              {selectedType === type.id ? '●' : '○'}
            </span>
            <div className="radio-card__content">
              <span className="radio-card__title">{type.title}</span>
              <span className="radio-card__subtitle">{type.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTypeStep;
