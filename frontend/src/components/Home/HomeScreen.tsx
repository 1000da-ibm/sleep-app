import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScheduleItem, ScheduleResponse } from "../../types";

const HomeScreen: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<ScheduleItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const fetchScheduleData = async (): Promise<void> => {
    try {
      const response = await axios.get<ScheduleResponse>(
        `${process.env.REACT_APP_API_URL}/api/schedule/today`
      );
      setScheduleData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching schedule:", error);
      // フォールバック用のモックデータ
      setScheduleData([
        { id: 1, time: "10:30", title: "クライアント訪問", type: "meeting" },
        { id: 2, time: "14:00", title: "プレゼン準備", type: "task" },
        { id: 3, time: "18:00", title: "ジム（予約済）", type: "personal" },
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="screen home-screen">
        <div style={{ textAlign: "center", padding: "50px" }}>
          読み込み中...
        </div>
      </div>
    );
  }

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

      <div className="screen home-screen">
        <div className="home-header">
          <h1 className="home-title">Home</h1>
          <div style={{ fontSize: "24px" }}>☰</div>
        </div>

        {/* Next Up Card */}
        <div className="schedule-card">
          <div className="schedule-header">Next Up</div>
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#3a3a3a",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            みかの予定まで一時間間近するのこと
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="schedule-card">
          <div className="schedule-header">今日の予定</div>
          {scheduleData &&
            scheduleData.map((item: ScheduleItem) => (
              <div key={item.id} className="schedule-item">
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-title">{item.title}</div>
              </div>
            ))}
        </div>

        {/* Bedtime Card */}
        <div className="bedtime-card">
          <div className="bedtime-title">今日の理想の入眠時刻は</div>
          <div className="bedtime-time">23:00</div>
          <div className="bedtime-subtitle">明日の予定から逆算しました</div>
        </div>

        {/* Life Class Section */}
        <div className="schedule-card">
          <div className="schedule-header">生活クラス</div>
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#3a3a3a",
              borderRadius: "12px",
              fontSize: "14px",
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            そろそろ今日の予定生活の始まりを調整できます。
          </div>

          {/* Chart placeholder */}
          <div
            style={{
              height: "100px",
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
              fontSize: "12px",
            }}
          >
            グラフエリア
          </div>
        </div>

        {/* Schedule Section */}
        <div className="schedule-card">
          <div className="schedule-header">Schedule</div>
          <div
            style={{ fontSize: "12px", color: "#aaa", marginBottom: "10px" }}
          >
            今日 6/4(火)
          </div>
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#3a3a3a",
              borderRadius: "8px",
              fontSize: "13px",
              color: "#fff",
            }}
          >
            <div>10時全体会議</div>
            <div style={{ marginTop: "8px" }}>🤖 ランチMTG</div>
          </div>
        </div>

        {/* Additional sections */}
        <div className="schedule-card">
          <div className="schedule-header">睡眠時間</div>
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#3a3a3a",
              borderRadius: "12px",
              fontSize: "14px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            夜間対応も頻繁なスケジュール導入でとても睡眠時間を確保するのには。
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: "#aaa",
            }}
          >
            <span>問題</span>
            <span>2:00</span>
            <span>5:00</span>
          </div>
        </div>

        <div className="schedule-card">
          <div className="schedule-header">睡眠タイム</div>
          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#3a3a3a",
              borderRadius: "12px",
              fontSize: "14px",
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            <div>パフォーマンス最適化</div>
            <div style={{ marginTop: "5px", fontSize: "12px", color: "#aaa" }}>
              高速の増強結果時間は・・・
            </div>
          </div>

          <div
            style={{
              padding: "15px 20px",
              backgroundColor: "#3a3a3a",
              borderRadius: "12px",
              fontSize: "14px",
              color: "#fff",
            }}
          >
            <div>トップパフォーマーのように</div>
            <div style={{ marginTop: "5px", fontSize: "12px", color: "#aaa" }}>
              17時間毎日のものであのようにすること。
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "430px",
            height: "90px",
            backgroundColor: "#1a1a1a",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderTop: "1px solid #333",
          }}
        >
          <div style={{ textAlign: "center", color: "#007AFF" }}>
            <div style={{ fontSize: "24px", marginBottom: "4px" }}>🏠</div>
            <div style={{ fontSize: "10px" }}>ホーム</div>
          </div>
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#FF3B30",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            🎤
          </div>
          <div style={{ textAlign: "center", color: "#666" }}>
            <div style={{ fontSize: "24px", marginBottom: "4px" }}>📋</div>
            <div style={{ fontSize: "10px" }}>詳細画面</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
