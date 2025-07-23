import React from "react";
import { OnboardingProps } from "../../types";
import { StatusBar } from "./StatusBar";
import { ButtonGroup } from "./ButtonGroup";
import { IllustrationTwo } from "./IllustrationTwo";

const OnboardingTwo: React.FC<OnboardingProps> = ({ onNext, onSkip }) => {
  return (
    <main className="onboarding-screen">
      <StatusBar />
      <div className="layout">
        <IllustrationTwo />
        <section className="content">
          <h1 className="title">
            予定に合わせた
            <br />
            “ちょうどいい眠り” をご提案
          </h1>
          <p className="description">
            Googleカレンダーなどと連携し、
            <br />
            あなたに合った入眠スケジュールを自動で提案。
            <br />
            睡眠の質も、日中の集中力もアップ！
          </p>

          {/* dots */}
          <div className="dots">
            <span className="dot" />
            <span className="dot active" />
            <span className="dot" />
          </div>
        </section>

        <ButtonGroup onNext={onNext} onSkip={onSkip} />
      </div>
    </main>
  );
};

export default OnboardingTwo;
