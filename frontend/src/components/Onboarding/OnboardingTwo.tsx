import React from "react";
import { OnboardingProps } from "../../types";

const OnboardingTwo: React.FC<OnboardingProps> = ({ onNext, onSkip }) => {
  return (
    <>
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="battery">
          <span>📶</span>
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      <div className="screen onboarding-screen">
        <div className="onboarding-illustration">📅</div>

        <div>
          <h1 className="onboarding-title">
            予定に合わせた
            <br />
            "ちょうどいい眠り"を提案
          </h1>
          <p className="onboarding-description">
            次回のカレンダーとあなたの予定。
            あなたにとって、最高のスケジュールを作れるように、
            睡眠時間も、目覚めの時刻もサポート！
          </p>
        </div>

        <div className="dots-indicator">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>

        <div className="button-container">
          <button className="btn btn-secondary" onClick={onSkip}>
            スキップ
          </button>
          <button className="btn btn-primary" onClick={onNext}>
            次へ
          </button>
        </div>
      </div>
    </>
  );
};

export default OnboardingTwo;
