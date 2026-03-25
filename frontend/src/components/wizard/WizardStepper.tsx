import React from 'react';
import type { WizardStepDef } from '../../types';
import './WizardStepper.css';

export type StepState = 'completed' | 'active' | 'upcoming' | 'skipped';

interface WizardStepperProps {
  readonly steps: readonly WizardStepDef[];
  readonly currentStep: number;
  readonly className?: string;
}

export const WizardStepper: React.FC<WizardStepperProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  const getState = (stepId: number): StepState => {
    if (stepId < currentStep) return 'completed';
    if (stepId === currentStep) return 'active';
    return 'upcoming';
  };

  return (
    <div className={`wizard-stepper ${className}`}>
      {steps.map((step, index) => {
        const state = getState(step.id);
        return (
          <React.Fragment key={step.id}>
            <div className={`wizard-stepper__step wizard-stepper__step--${state}`}>
              <div className="wizard-stepper__circle">
                {state === 'completed' ? '✓' : step.id}
              </div>
              <span className="wizard-stepper__label">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`wizard-stepper__line ${
                state === 'completed' ? 'wizard-stepper__line--completed' : ''
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default WizardStepper;
