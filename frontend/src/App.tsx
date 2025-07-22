import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OnboardingOne from "./components/Onboarding/OnboardingOne";
import OnboardingTwo from "./components/Onboarding/OnboardingTwo";
import OnboardingThree from "./components/Onboarding/OnboardingThree";
import HomeScreen from "./components/Home/HomeScreen";
import "./styles/global.css";

// オンボーディングステップの型定義
type OnboardingStep = 1 | 2 | 3;

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(1);
  const [isOnboardingComplete, setIsOnboardingComplete] =
    useState<boolean>(false);

  const nextStep = (): void => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as OnboardingStep);
    } else {
      setIsOnboardingComplete(true);
    }
  };

  const skipOnboarding = (): void => {
    setIsOnboardingComplete(true);
  };

  if (!isOnboardingComplete) {
    return (
      <div className="app">
        {currentStep === 1 && (
          <OnboardingOne onNext={nextStep} onSkip={skipOnboarding} />
        )}
        {currentStep === 2 && (
          <OnboardingTwo onNext={nextStep} onSkip={skipOnboarding} />
        )}
        {currentStep === 3 && (
          <OnboardingThree onNext={nextStep} onSkip={skipOnboarding} />
        )}
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
