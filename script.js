/**
 * ご指定いただいた数学Ⅰ〜Cの全単元リストです。
 * 配列の順番通りに SECTION 01, 02... と自動表示されます。
 */
const data = {
    math1: [
        "数と式",
        "集合と論理",
        "２次関数",
        "図形と計量",
        "データの分析"
    ],
    math2: [
        "式と証明",
        "複素数と方程式",
        "図形と方程式",
        "三角関数",
        "指数関数と対数関数",
        "微分法と積分法"
    ],
    math3: [
        "関数",
        "極限",
        "微分法",
        "微分法の応用",
        "積分法",
        "積分法の応用"
    ],
    mathA: [
        "場合の数と確率",
        "図形の性質",
        "数学と人間の活動"
    ],
    mathB: [
        "数列",
        "統計的な推測"
    ],
    mathC: [
        "平面上のベクトル",
        "空間のベクトル",
        "複素数平面",
        "式と曲線"
    ]
};

/**
 * リンク管理オブジェクト
 * 各単元のボタンに紐付けるURLをここに記述してください。
 */
const links = {
    // 数学1
    "math1_01": { video: "#", pdf: "#" }, "math1_02": { video: "#", pdf: "#" }, 
    "math1_03": { video: "#", pdf: "#" }, "math1_04": { video: "#", pdf: "#" }, 
    "math1_05": { video: "https://www.youtube.com/playlist?list=PLib7BLwcvXJbozlWLJh0aXwJ4cFZW3B1v", pdf: "#" },

    // 数学2
    "math2_01": { video: "#", pdf: "#" }, "math2_02": { video: "#", pdf: "#" }, 
    "math2_03": { video: "#", pdf: "#" }, "math2_04": { video: "#", pdf: "#" }, 
    "math2_05": { video: "#", pdf: "#" }, "math2_06": { video: "#", pdf: "#" },

    // 数学3
    "math3_01": { video: "#", pdf: "#" }, "math3_02": { video: "#", pdf: "#" }, 
    "math3_03": { video: "#", pdf: "#" }, "math3_04": { video: "#", pdf: "#" }, 
    "math3_05": { video: "#", pdf: "#" }, "math3_06": { video: "#", pdf: "#" },

    // 数学A
    "mathA_01": { video: "#", pdf: "#" }, "mathA_02": { video: "#", pdf: "#" }, 
    "mathA_03": { video: "#", pdf: "#" },

    // 数学B
    "mathB_01": { video: "#", pdf: "#" }, "mathB_02": { video: "#", pdf: "#" },

    // 数学C
    "mathC_01": { video: "#", pdf: "#" }, "mathC_02": { video: "#", pdf: "#" }, 
    "mathC_03": { video: "#", pdf: "#" }, "mathC_04": { video: "#", pdf: "#" }
};

// --- 以下、描画関数と初期化処理（前回と同じ） ---

function renderUnits(subjectKey) {
    const container = document.getElementById('unit-container');
    const title = document.getElementById('subject-title');
    if (!container || !title) return;

    const subjectNames = {
        math1: "数学Ⅰ", math2: "数学Ⅱ", math3: "数学Ⅲ", 
        mathA: "数学A", mathB: "数学B", mathC: "数学C"
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
                    <a href="${unitLinks.video}" target="_blank" class="btn btn-video">▶ 解説動画</a>
                    <a href="${unitLinks.pdf}" target="_blank" class="btn btn-pdf">📄 プリント</a>
                </div>
            </div>
        `;
    }).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const keyword = "Teikyokani"; // 合言葉
    const userInput = prompt("合言葉を入力してください");
    if (userInput === keyword) {
        renderUnits('math1');
    } else {
        alert("合言葉が正しくありません。");
        document.body.innerHTML = "<div style='text-align:center; padding-top:100px;'><h1>認証が必要です</h1></div>";
    }

});
