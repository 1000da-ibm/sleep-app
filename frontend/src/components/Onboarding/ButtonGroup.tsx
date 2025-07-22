import React from "react";

interface Props {
  onNext: () => void;
  onSkip: () => void;
}

export const ButtonGroup: React.FC<Props> = ({ onNext, onSkip }) => (
  <div className="btn-group">
    <button className="btn-secondary" onClick={onSkip}>
      スキップ
    </button>
    <button className="btn-primary" onClick={onNext}>
      次へ
    </button>
  </div>
);
