const data = {
    math1: ["数と式", "集合と論理", "２次関数", "図形と計量", "データの分析"],
    math2: ["式と証明", "複素数と方程式", "図形と方程式", "三角関数", "指数関数と対数関数", "微分法と積分法"],
    math3: ["関数", "極限", "微分法", "微分法の応用", "積分法", "積分法の応用"],
    mathA: ["場合の数と確率", "図形の性質", "数学と人間の活動"],
    mathB: ["数列", "統計的な推測"],
    mathC: ["平面上のベクトル", "空間のベクトル", "複素数平面", "式と曲線"],
    
    // 共通テスト用の項目（自由に変更してください）
    common: ["共通テスト・数学ⅠA予想演習", "共通テスト・数学ⅡBC予想演習", "共通テスト・頻出解法ポイント"],
    
    // 演習用の項目（自由に変更してください）
    exercise: ["計算力強化トレーニング", "入試基礎演習 第1回", "入試基礎演習 第2回", "発展問題演習"]
};

// リンク管理（共通テストや演習のURLもここに追加できます）
const links = {
    "math1_01": { video: "#", pdf: "#" },
    "common_01": { video: "#", pdf: "#" },
    "exercise_01": { video: "#", pdf: "#" }
};

function renderUnits(subjectKey) {
    const container = document.getElementById('unit-container');
    const title = document.getElementById('subject-title');
    if (!container || !title) return;

    const subjectNames = {
        math1: "数学Ⅰ", math2: "数学Ⅱ", math3: "数学Ⅲ", 
        mathA: "数学A", mathB: "数学B", mathC: "数学C",
        common: "共通テスト対策",
        exercise: "演習問題"
    };
    
    title.innerText = subjectNames[subjectKey];

    container.innerHTML = data[subjectKey].map((unitName, i) => {
        const unitId = `${subjectKey}_${String(i + 1).padStart(2, '0')}`;
        const unitLinks = links[unitId] || { video: "#", pdf: "#" };
        
        return `
            <div class="unit-card">
                <div>
                    <div class="section-num">SECTION ${String(i + 1).padStart(2, '0')}</div>
                    <h3 class="unit-title">${unitName}</h3>
                </div>
                <div class="btn-group">
                    <a href="${unitLinks.video}" target="_blank" class="btn btn-video">▶ 動画</a>
                    <a href="${unitLinks.pdf}" target="_blank" class="btn btn-pdf">📄 プリント</a>
                </div>
            </div>
        `;
    }).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const keyword = "Teikyokani";
    const userInput = prompt("合言葉を入力してください");
    if (userInput === keyword) {
        renderUnits('math1');
    } else {
        alert("認証失敗");
        document.body.innerHTML = "<h1>認証が必要です</h1>";
    }
});
