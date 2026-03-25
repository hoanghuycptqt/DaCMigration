import React from 'react';
import { SW_ARCH_ROWS } from '../../../../data/wizard';
import Button from '../../../../components/ui/Button';
import '../steps.css';
const SwArchConfig: React.FC = () => (
  <div>
    <h2 className="step-title">SW Architecture Configuration</h2>
    <div className="form-group"><label className="form-label">SW Package Name (SwPkg)</label><div className="form-input-wrapper"><input className="form-input form-input--success" defaultValue="CC_EAL" /><span className="form-input-icon">✓</span></div></div>
    <h3 className="section-label">Architecture Data</h3>
    <table className="data-table"><thead><tr><th>need_type</th><th>title</th><th>element_class</th><th>long_name_en</th><th>responsible</th><th>description</th><th>parent_element</th><th>dir</th></tr></thead><tbody>
      {SW_ARCH_ROWS.map((r, i) => (<tr key={i}><td>{r.needType}</td><td>{r.title}</td><td><input className="cell-input" defaultValue={r.elementClass}/></td><td>{r.longName}</td><td>{r.responsible}</td><td>{r.description}</td><td>{r.parent}</td><td>{r.dir}</td></tr>))}
      <tr><td colSpan={8}><input className="cell-input" placeholder="Add new row..." /></td></tr>
    </tbody></table>
    <Button variant="ghost" size="sm" className="add-row-btn">+ Add Row</Button>
  </div>
);
export default SwArchConfig;
