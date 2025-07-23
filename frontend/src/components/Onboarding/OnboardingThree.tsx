import React from "react";
import { OnboardingProps } from "../../types";
import { StatusBar } from "./StatusBar";
import { ButtonGroup } from "./ButtonGroup";

const OnboardingTwo: React.FC<OnboardingProps> = ({ onNext, onSkip }) => {
  return (
    <main className="onboarding-screen">
      <StatusBar />
      <div className="layout">
        <IllustrationThree />
        {/* タイトル & 説明 */}
        <section className="content">
          <h1 className="title">毎日が少しずつ、整っていく</h1>
          <p className="description">
            睡眠 × スケジュールで、1日の質が変わります。
            <br />
            さっそく、あなたの“すやりずむ”を始めましょう。
          </p>

          {/* dots */}
          <div className="dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot active" />
          </div>
        </section>

        {/* 開始ボタンは 1 つだけ */}
        {/* <button className="start-btn" onClick={handleStart}>
          さあ、始めよう
        </button> */}
      </div>
    </main>
  );
};

export default OnboardingTwo;
