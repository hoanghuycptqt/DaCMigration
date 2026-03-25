import React, { useState } from 'react';
import './steps.css';

const ExecuteStep: React.FC = () => {
  const [mode, setMode] = useState<'now' | 'schedule'>('now');

  return (
    <div>
      <h2 className="step-title">Execute or Schedule</h2>
      <p className="step-subtitle">Choose when to start your migration</p>
      <div className="radio-card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className={`radio-card ${mode === 'now' ? 'radio-card--selected' : ''}`} onClick={() => setMode('now')}>
          <span className="radio-card__indicator">{mode === 'now' ? '●' : '○'}</span>
          <div className="radio-card__content">
            <span className="radio-card__title">Execute Now</span>
            <span className="radio-card__subtitle">Start the migration immediately</span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)', marginTop: 'var(--space-1)' }}>2 running, 1 queued</span>
          </div>
        </div>
        <div className={`radio-card ${mode === 'schedule' ? 'radio-card--selected' : ''}`} onClick={() => setMode('schedule')}>
          <span className="radio-card__indicator">{mode === 'schedule' ? '●' : '○'}</span>
          <div className="radio-card__content">
            <span className="radio-card__title">Schedule for Later</span>
            <span className="radio-card__subtitle">Pick a date and time</span>
            {mode === 'schedule' && (
              <div style={{ display: 'flex', gap: 'var(--space-2)', marginTop: 'var(--space-2)' }}>
                <input type="date" className="form-input" style={{ flex: 1 }} />
                <input type="time" className="form-input" style={{ flex: 1 }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecuteStep;
