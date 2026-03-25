import React from 'react';
import type { MigrationType } from '../../../types';
import SwArchConfig from './source-configs/SwArchConfig';
import DoorsReqConfig from './source-configs/DoorsReqConfig';
import DngReqConfig from './source-configs/DngReqConfig';
import DoorsDsdConfig from './source-configs/DoorsDsdConfig';
import DngDsdConfig from './source-configs/DngDsdConfig';
import RhapsodyConfig from './source-configs/RhapsodyConfig';
import TestSpecConfig from './source-configs/TestSpecConfig';
import './steps.css';

interface SourceConfigStepProps {
  readonly selectedType: MigrationType | null;
}

const SourceConfigStep: React.FC<SourceConfigStepProps> = ({ selectedType }) => {
  const renderConfig = () => {
    switch (selectedType) {
      case 'sw-architecture': return <SwArchConfig />;
      case 'doors-requirements': return <DoorsReqConfig />;
      case 'dng-requirements': return <DngReqConfig />;
      case 'doors-dsd': return <DoorsDsdConfig />;
      case 'dng-dsd': return <DngDsdConfig />;
      case 'rhapsody-dsd': return <RhapsodyConfig />;
      case 'testspec': return <TestSpecConfig />;
      default: return <p>Please select a migration type first.</p>;
    }
  };
  return <div>{renderConfig()}</div>;
};
export default SourceConfigStep;
