import React from "react";

import ScheduleImg from "../../assets/Onboarding/OnboardingTwo/Schedule.png";
import SleepTimeImg from "../../assets/Onboarding/OnboardingTwo/SleepTime.png";

/** 予定カード + 入眠カード（画像をそのまま配置） */
export const IllustrationTwo: React.FC = () => (
  <>
    <img src={ScheduleImg} alt="今日の予定" className="schedule-img" />
    <img src={SleepTimeImg} alt="今日の入眠時間" className="sleep-img" />
  </>
);
