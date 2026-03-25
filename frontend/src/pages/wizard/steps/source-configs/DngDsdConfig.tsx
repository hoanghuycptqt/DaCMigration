import React from 'react';
import { DNG_DSD_URLS } from '../../../../data/wizard';
import Button from '../../../../components/ui/Button';
import '../steps.css';
const DngDsdConfig: React.FC = () => (
  <div>
    <h2 className="step-title">DNG DSD Configuration</h2>
    <div className="form-group"><label className="form-label">SW Package Name (SwPkg)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="CC_EAL" /><span className="form-input-icon">✓</span></div></div>
    <div className="form-group"><label className="form-label">Context URL (GC Configuration)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="https://dng.bosch.com/gc/configuration/456" /><span className="form-input-icon">✓</span></div></div>
    <h3 className="section-label">DNG DSD Module URLs</h3>
    <div className="url-list">
      {DNG_DSD_URLS.map((url, i) => (<div className="url-row" key={i}><input className="form-input" defaultValue={url} /><button className="url-row__delete">✕</button></div>))}
      <div className="url-row"><input className="form-input" placeholder="Enter DNG module URL..." /></div>
    </div>
    <Button variant="ghost" size="sm" className="add-row-btn">+ Add Module URL</Button>
  </div>
);
export default DngDsdConfig;
