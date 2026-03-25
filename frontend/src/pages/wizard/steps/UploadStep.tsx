import React from 'react';
import NotificationBanner from '../../../components/feedback/NotificationBanner';
import { UPLOADED_FILES } from '../../../data/wizard';
import './steps.css';

interface UploadStepProps {
  readonly isAutomated: boolean;
}

const UploadStep: React.FC<UploadStepProps> = ({ isAutomated }) => {
  if (isAutomated) {
    return (
      <div>
        <h2 className="step-title">Automated Export from DOORS</h2>
        <p className="step-subtitle">The system is automatically exporting data from DOORS. Please wait...</p>
        <div className="progress-steps">
          <div className="progress-step"><span className="progress-step__icon">✅</span><span className="progress-step__label">Exporting ReqIF from DOORS</span><span className="progress-step__status progress-step__status--completed">Completed</span><span className="progress-step__time">2m 34s</span></div>
          <div className="progress-step"><span className="progress-step__icon">✅</span><span className="progress-step__label">Parsing ReqIF to JSON</span><span className="progress-step__status progress-step__status--completed">Completed</span><span className="progress-step__time">0m 45s</span></div>
          <div className="progress-step"><span className="progress-step__icon">🔵</span><span className="progress-step__label">Exporting linking information...</span><span className="progress-step__status progress-step__status--in-progress">In Progress</span><span className="progress-step__time">1m 12s</span></div>
        </div>
        <div className="progress-bar-container"><div className="progress-bar"><div className="progress-bar__fill" style={{ width: '66%' }} /></div><p className="progress-bar__label">2 of 3 steps completed</p></div>
        <NotificationBanner variant="success">No manual file upload needed for DOORS types.</NotificationBanner>
      </div>
    );
  }

  return (
    <div>
      <h2 className="step-title">Upload Source Files</h2>
      <p className="step-subtitle">Upload your ReqIF exports and supporting files</p>
      <div className="upload-zone">
        <span className="upload-zone__icon">☁️</span>
        <p className="upload-zone__text">Drag files here or click to browse</p>
        <p className="upload-zone__hint">Accepted: .reqif, .reqifz, .png, .jpg — Max 50MB per file</p>
      </div>
      <div className="file-list">
        {UPLOADED_FILES.map((file, i) => (
          <div className="file-row" key={i}>
            <span className="file-row__icon">{file.name.endsWith('.png') ? '🖼️' : '📄'}</span>
            <span className="file-row__name">{file.name}</span>
            <span className="file-row__size">{file.size}</span>
            <div className="file-row__progress"><div className={`file-row__progress-fill ${file.progress === 100 ? 'file-row__progress-fill--complete' : 'file-row__progress-fill--uploading'}`} style={{ width: `${file.progress}%` }} /></div>
            <span className={file.status === 'Uploaded' ? 'file-row__status--uploaded' : 'file-row__status--uploading'}>{file.status === 'Uploaded' ? '✓ Uploaded' : 'Uploading...'}</span>
            <button className="file-row__delete">🗑️</button>
          </div>
        ))}
        <p className="text-muted" style={{ marginTop: 'var(--space-2)' }}>3 files — 23.1 MB total</p>
      </div>
    </div>
  );
};

export default UploadStep;
