import React from 'react';
import './steps.css';

const RepositoryStep: React.FC = () => (
  <div>
    <h2 className="step-title">Repository & Branch</h2>
    <div className="form-group">
      <label className="form-label">Repository</label>
      <div className="form-input-wrapper">
        <input className="form-input form-input--success" value="bosch-engineering/sw-pkg-cc-eal-dac" readOnly />
        <span className="form-input-icon">✓</span>
      </div>
      <span className="form-helper">Select a GitHub Enterprise repository</span>
    </div>
    <div className="form-group">
      <label className="form-label">Branch</label>
      <div className="form-input-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <input className="form-input" value="migration/doors-requirements-2024" readOnly style={{ flex: 1 }} />
        <span style={{ color: 'var(--signal-success)', fontSize: 'var(--font-size-xs)', fontWeight: 600, background: 'var(--signal-success-light)', padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>New</span>
      </div>
      <span className="form-helper">Branch will be created from main</span>
    </div>
  </div>
);
export default RepositoryStep;
