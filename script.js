const data = {
    math1: ["数と式", "集合と論理", "２次関数", "図形と計量", "データの分析"],
    math2: ["式と証明", "複素数と方程式", "図形と方程式", "三角関数", "指数関数と対数関数", "微分法と積分法"],
    math3: ["関数", "極限", "微分法", "微分法の応用", "積分法", "積分法の応用"],
    mathA: ["場合の数と確率", "図形の性質", "数学と人間の活動"],
    mathB: ["数列", "統計的な推測"],
    mathC: ["平面上のベクトル", "空間のベクトル", "複素数平面", "式と曲線"],
    // 共通テスト解説の「章（カード）」
    common: ["2025年度"]
};

const links = {
    // リンクの例：common_01_d1（共通テスト2025年度の第1問）
    "common_01_d1": "#",
    "common_01_d2": "#",
    "common_01_d3": "#",
    "common_01_d4": "#",
    "common_01_d5": "#"
};

function renderUnits(subjectKey) {
    const container = document.getElementById('unit-container');
    const title = document.getElementById('subject-title');
    
    const subjectNames = {
        math1: "数学Ⅰ", math2: "数学Ⅱ", math3: "数学Ⅲ", 
        mathA: "数学A", mathB: "数学B", mathC: "数学C",
        common: "共通テスト解説"
    };
    title.innerText = subjectNames[subjectKey];

    const unitList = data[subjectKey] || [];
    container.innerHTML = unitList.map((unitName, i) => {
        const unitId = `${subjectKey}_${String(i + 1).padStart(2, '0')}`;
        
        // --- 共通テスト解説の場合：大問1〜5を表示 ---
        if (subjectKey === 'common') {
            return `
                <div class="unit-card">
                    <h3 class="unit-title">${unitName}</h3>
                    <div class="btn-group">
                        <a href="${links[unitId+'_d1'] || '#'}" target="_blank" class="btn btn-daimon">第1問</a>
                        <a href="${links[unitId+'_d2'] || '#'}" target="_blank" class="btn btn-daimon">第2問</a>
                        <a href="${links[unitId+'_d3'] || '#'}" target="_blank" class="btn btn-daimon">第3問</a>
                        <a href="${links[unitId+'_d4'] || '#'}" target="_blank" class="btn btn-daimon">第4問</a>
                        <a href="${links[unitId+'_d5'] || '#'}" target="_blank" class="btn btn-daimon">第5問</a>
                    </div>
                </div>
            `;
        }

        // --- 通常の数学科目の場合：解説動画・プリントを表示 ---
        return `
            <div class="unit-card">
                <h3 class="unit-title">${unitName}</h3>
                <div class="btn-group">
                    <a href="#" class="btn btn-normal">▶ 解説動画</a>
                    <a href="#" class="btn btn-normal fill">📄 プリント</a>
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const keyword = "Teikyokani";
    const userInput = prompt("合言葉を入力してください");
    if (userInput === keyword) {
        renderUnits('math1');
    }
});
