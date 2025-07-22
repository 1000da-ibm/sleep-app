import React from "react";

/**
 * Apple HIG 準拠ステータスバー
 * - 左: 時刻 (9:41)
 * - 右: 電波 / Wi-Fi / バッテリー
 */
export const StatusBar: React.FC = () => (
  <header className="status-bar">
    {/* ---- Time ---- */}
    <div className="time">9:41</div>

    {/* ---- Spacer (Dynamic Island) ---- */}
    <div className="dynamic-island-spacer" />

    {/* ---- Right-side Levels ---- */}
    <div className="levels">
      {/* Cellular */}
      <svg
        className="cellular"
        width="19"
        height="12"
        viewBox="0 0 19 12"
        fill="none"
      >
        {[3, 6, 9, 12, 15].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={12 - (i + 1) * 2}
            width="2"
            height={(i + 1) * 2}
            rx="0.5"
            fill="white"
          />
        ))}
      </svg>

      {/* Wi-Fi */}
      <svg
        className="wifi"
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M1 4.5a12 12 0 0115 0" />
        <path d="M4 7.5a8 8 0 018 0" />
        <path d="M7 10.5a4 4 0 014 0" />
        <circle cx="8.5" cy="10.5" r="0.5" fill="white" stroke="white" />
      </svg>

      {/* Battery */}
      <svg
        className="battery"
        width="27"
        height="13"
        viewBox="0 0 27 13"
        fill="none"
      >
        <rect
          x="1"
          y="1"
          width="21"
          height="11"
          rx="3"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <rect x="3" y="3" width="17" height="7" rx="2" fill="white" />
        <rect
          x="23"
          y="4"
          width="2"
          height="5"
          rx="1"
          fill="white"
          opacity="0.4"
        />
      </svg>
    </div>
  </header>
);
