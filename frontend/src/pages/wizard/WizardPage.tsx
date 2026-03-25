import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AppShell from '../../components/layout/AppShell';
import WizardStepper from '../../components/wizard/WizardStepper';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useWizard } from '../../hooks/useWizard';
import { WIZARD_STEPS } from '../../data/wizard';
import { MIGRATION_TYPES } from '../../data/migrations';
import type { MigrationType } from '../../types';
import SelectTypeStep from './steps/SelectTypeStep';
import RepositoryStep from './steps/RepositoryStep';
import SourceConfigStep from './steps/SourceConfigStep';
import UploadStep from './steps/UploadStep';
import MappingStep from './steps/MappingStep';
import ReviewStep from './steps/ReviewStep';
import ExecuteStep from './steps/ExecuteStep';
import './WizardPage.css';

const WizardPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentStep, goNext, goBack, goToStep } = useWizard(8);
  const preselectedType = searchParams.get('type') as MigrationType | null;
  const [selectedType, setSelectedType] = React.useState<MigrationType | null>(preselectedType);

  const isAutomated = selectedType === 'doors-requirements' || selectedType === 'doors-dsd';

  const handleStartMigration = () => {
    navigate('/requests/24');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return <SelectTypeStep selectedType={selectedType} onSelect={setSelectedType} />;
      case 2: return <RepositoryStep />;
      case 3: return <SourceConfigStep selectedType={selectedType} />;
      case 4: return <UploadStep isAutomated={isAutomated} />;
      case 5: return <MappingStep selectedType={selectedType} />;
      case 6: return <ReviewStep selectedType={selectedType} onEditStep={goToStep} />;
      case 7: return <ExecuteStep />;
      default: return <div>Step {currentStep}</div>;
    }
  };

  return (
    <AppShell>
      <h1 className="page-title">New Migration</h1>

      <WizardStepper steps={WIZARD_STEPS} currentStep={currentStep} className="wizard-page__stepper" />

      <Card className="wizard-page__content">
        {renderStepContent()}
      </Card>

      <div className="wizard-page__actions">
        <Button variant="neutral" onClick={goBack} disabled={currentStep === 1}>
          Back
        </Button>
        <div className="wizard-page__actions-right">
          {currentStep > 1 && currentStep < 7 && (
            <Button variant="ghost" onClick={() => {}}>
              Save Draft
            </Button>
          )}
          {currentStep < 7 ? (
            <Button variant="primary" onClick={goNext} disabled={currentStep === 1 && !selectedType}>
              Next
            </Button>
          ) : (
            <Button variant="primary" size="lg" onClick={handleStartMigration}>
              Start Migration
            </Button>
          )}
        </div>
      </div>
    </AppShell>
  );
};

export default WizardPage;
