import React from 'react';
import { DOORS_DSD_MODULES } from '../../../../data/wizard';
import NotificationBanner from '../../../../components/feedback/NotificationBanner';
import Button from '../../../../components/ui/Button';
import '../steps.css';
const DoorsDsdConfig: React.FC = () => (
  <div>
    <h2 className="step-title">DOORS DSD Configuration</h2>
    <div className="form-group"><label className="form-label">SW Package Name (SwPkg)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="CC_EAL" /><span className="form-input-icon">✓</span></div></div>
    <NotificationBanner variant="info">System will automatically export ReqIF from DOORS. No manual file upload needed.</NotificationBanner>
    <h3 className="section-label">DOORS DSD Module Information</h3>
    <table className="data-table"><thead><tr><th>Module Name</th><th>DOORS Path</th><th>Baseline Version</th></tr></thead><tbody>
      {DOORS_DSD_MODULES.map((m, i) => (<tr key={i}><td>{m.moduleName}</td><td>{m.doorsPath}</td><td>{m.baselineVersion}</td></tr>))}
      <tr><td colSpan={3}><input className="cell-input" placeholder="Add module..." /></td></tr>
    </tbody></table>
    <Button variant="ghost" size="sm" className="add-row-btn">+ Add Module</Button>
  </div>
);
export default DoorsDsdConfig;
