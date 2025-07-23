import React from "react";
import { OnboardingProps } from "../../types";
import { StatusBar } from "./StatusBar";
import { Illustration } from "./Illustration";
import { ButtonGroup } from "./ButtonGroup";

const OnboardingOne: React.FC<OnboardingProps> = ({ onNext, onSkip }) => {
  return (
    <main className="onboarding-screen">
      <StatusBar />
      <div className="layout">
        <Illustration />
        <section className="content">
          <h1 className="title">眠れない理由、知っていますか？</h1>
          <p className="description">
            予定に追われて、眠るタイミングを逃していませんか？
            <br />
            『すやりずむ』は、あなたの生活リズムを
            <br />
            整えるお手伝いをします。
          </p>

          {/* progress dots */}
          <div className="dots">
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
          </div>
        </section>
        <ButtonGroup onNext={onNext} onSkip={onSkip} />
      </div>
    </main>
  );
};

export default OnboardingOne;
