import React from "react";
import WomanDesk from "../../assets/Onboarding/OnboardingOne/WomanDesk.png";
import MoonIcon from "../../assets/Onboarding/OnboardingOne/Moon.png";
import ClockIcon from "../../assets/Onboarding/OnboardingOne/Clock.png";

/** 月・時計・人物をレイヤーで重ねる */
export const Illustration: React.FC = () => (
  <div className="illustration-wrapper">
    <img src={WomanDesk} alt="" className="woman" />
    <img src={MoonIcon} alt="" className="moon" />
    <img src={ClockIcon} alt="" className="clock" />
  </div>
);
