from flask import Flask, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# モックデータ
mock_schedule = [
    {
        "id": 1,
        "time": "10:30",
        "title": "クライアント訪問",
        "type": "meeting"
    },
    {
        "id": 2,
        "time": "14:00",
        "title": "プレゼン準備",
        "type": "task"
    },
    {
        "id": 3,
        "time": "18:00",
        "title": "ジム（予約済）",
        "type": "personal"
    }
]

@app.route('/api/schedule/today', methods=['GET'])
def get_today_schedule():
    return jsonify({
        "success": True,
        "data": mock_schedule,
        "bedtime": "23:00",
        "message": "明日の予定から逆算しました"
    })

@app.route('/api/user/onboarding', methods=['POST'])
def complete_onboarding():
    return jsonify({
        "success": True,
        "message": "オンボーディング完了"
    })

@app.route('/api/schedule/stats', methods=['GET'])
def get_schedule_stats():
    return jsonify({
        "success": True,
        "data": {
            "next_meeting": "ベビー誕生：今日の流れを振り返る",
            "sleep_goal": "10時 - 11時",
            "life_class": "そろそろ今日の予定生活の始まりを調整できます。",
            "bedtime_suggestion": "バランスーラクで就寝を目指しましょう。",
            "sleep_stats": {
                "bedtime": "パフォーマンス最高値",
                "quality": "高速の増強結果時間は・・・"
            }
        }
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)