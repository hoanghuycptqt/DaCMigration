import React from 'react';
import { TESTSPEC_MODULES } from '../../../../data/wizard';
import Button from '../../../../components/ui/Button';
import '../steps.css';
const TestSpecConfig: React.FC = () => (
  <div>
    <h2 className="step-title">TestSpec Configuration</h2>
    <div className="form-group"><label className="form-label">Excel Directory Name (excelDirName)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="CC_EAL_TestSpecs" /><span className="form-input-icon">✓</span></div></div>
    <h3 className="section-label">Test Spec Modules</h3>
    <table className="data-table"><thead><tr><th>Module Name</th><th>Target Folder</th><th>UT Spec Version</th><th>SWQT Spec Version</th><th>SysQT Spec Version</th></tr></thead><tbody>
      {TESTSPEC_MODULES.map((m, i) => (<tr key={i}><td>{m.moduleName}</td><td>{m.targetFolder}</td><td>{m.utVersion}</td><td>{m.swqtVersion}</td><td>{m.sysqtVersion}</td></tr>))}
      <tr><td colSpan={5}><input className="cell-input" placeholder="Add module..." /></td></tr>
    </tbody></table>
    <Button variant="ghost" size="sm" className="add-row-btn">+ Add Module</Button>
  </div>
);
export default TestSpecConfig;
