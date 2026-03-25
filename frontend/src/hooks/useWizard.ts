import { useState, useCallback } from 'react';

export function useWizard(totalSteps: number = 8) {
  const [currentStep, setCurrentStep] = useState(1);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  const goBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return { currentStep, goNext, goBack, goToStep, isFirstStep, isLastStep };
}
