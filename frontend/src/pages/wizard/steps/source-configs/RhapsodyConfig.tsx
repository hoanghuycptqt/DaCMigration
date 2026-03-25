import React from 'react';
import { RHAPSODY_MODULES } from '../../../../data/wizard';
import Button from '../../../../components/ui/Button';
import '../steps.css';
const RhapsodyConfig: React.FC = () => (
  <div>
    <h2 className="step-title">Rhapsody DSD Configuration</h2>
    <div className="form-group"><label className="form-label">SW Package Name (SwPkg)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="CC_EAL" /><span className="form-input-icon">✓</span></div></div>
    <h3 className="section-label">Rhapsody Modules</h3>
    <table className="data-table"><thead><tr><th>Module Name</th><th>Target Folder</th><th>Rhapsody Version on SDOM</th></tr></thead><tbody>
      {RHAPSODY_MODULES.map((m, i) => (<tr key={i}><td>{m.moduleName}</td><td>{m.targetFolder}</td><td>{m.version}</td></tr>))}
      <tr><td colSpan={3}><input className="cell-input" placeholder="Add module..." /></td></tr>
    </tbody></table>
    <Button variant="ghost" size="sm" className="add-row-btn">+ Add Module</Button>
  </div>
);
export default RhapsodyConfig;
