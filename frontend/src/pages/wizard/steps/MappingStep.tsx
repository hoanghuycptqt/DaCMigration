import React from 'react';
import type { MigrationType } from '../../../types';
import { DNG_MAPPING_ROWS, DOORS_MAPPING_ROWS } from '../../../data/wizard';
import Button from '../../../components/ui/Button';
import './steps.css';

interface MappingStepProps {
  readonly selectedType: MigrationType | null;
}

const MappingStep: React.FC<MappingStepProps> = ({ selectedType }) => {
  const isDng = selectedType === 'dng-requirements' || selectedType === 'dng-dsd';
  const isDoors = selectedType === 'doors-requirements' || selectedType === 'doors-dsd';
  const rows = isDng ? DNG_MAPPING_ROWS : DOORS_MAPPING_ROWS;
  const completedCount = rows.filter((r) => r.status === 'complete').length;

  return (
    <div>
      <h2 className="step-title">Module Mapping</h2>
      <p className="step-subtitle">Map source modules to Git paths{isDng ? ' and RST file prefixes' : ''}</p>
      <div className="mapping-toolbar">
        <Button variant="ghost" size="sm">Import Mapping JSON</Button>
        <Button variant="ghost" size="sm">Export Mapping JSON</Button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th style={{width: 50}}>Status</th>
            <th>Source Module</th>
            <th>Git Path</th>
            {isDng && <th>RST File Prefix</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.status === 'complete' ? <span style={{color:'var(--signal-success)'}}>✅</span> : <span style={{color:'var(--signal-error)'}}>⚠️</span>}</td>
              <td className="cell-readonly">{r.sourceModule}</td>
              <td><input className={`cell-input ${r.status === 'incomplete' ? 'cell-input--error' : ''}`} defaultValue={r.gitPath} placeholder="Enter git path..." /></td>
              {isDng && 'rstPrefix' in r && <td><input className={`cell-input ${r.status === 'incomplete' ? 'cell-input--error' : ''}`} defaultValue={r.rstPrefix} placeholder="Enter prefix..." /></td>}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mapping-summary">
        <span>{completedCount} of {rows.length} modules mapped</span>
        <div className="progress-bar" style={{width: 120}}><div className="progress-bar__fill" style={{width: `${(completedCount/rows.length)*100}%`}} /></div>
      </div>
    </div>
  );
};

export default MappingStep;
