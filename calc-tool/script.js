// 10 门课程数据：课程名 / 学分 / 百分制成绩
// 注意：里面有两条非法数据（105 和 -3），第二步用清洗函数过滤
const scores = [
    { name: '高等数学', credit: 4, score: 88 },
    { name: '大学英语', credit: 3, score: 76 },
    { name: '计算机基础', credit: 3, score: 92 },
    { name: '体育', credit: 1, score: 59 },
    { name: '线性代数', credit: 4, score: 45 },
    { name: '中国近现代史', credit: 2, score: 81 },
    { name: '大学物理', credit: 4, score: 105 },
    { name: '心理健康', credit: 1, score: -3 },
    { name: '程序设计', credit: 3, score: 95 },
    { name: '艺术鉴赏', credit: 2, score: 67 }
];

// ========== 第一步输出 ==========
console.table(scores);

// ============================================================
// 第二步：清洗与统计函数
// ============================================================

// 清洗：只保留成绩在 0 至 100 之间、且学分大于 0 的合法课程
const cleanScores = (list) =>
    list.filter(s => s.score >= 0 && s.score <= 100 && s.credit > 0);

// 百分制成绩 -> 绩点
// 规则：60 分以下绩点为 0；60 分起绩点 = (score - 50) / 10
// 例：59 -> 0，60 -> 1，88 -> 3.8，100 -> 5
const scoreToPoint = (score) =>
    score < 60 ? 0 : (score - 50) / 10;

// 给每门课补上 point（绩点）字段 —— 使用 map
const withPoint = (list) =>
    list.map(s => ({ name: s.name, credit: s.credit, score: s.score, point: scoreToPoint(s.score) }));

// 加权平均绩点 —— 使用 reduce
// 公式：所有课(绩点 × 学分)之和 ÷ 所有课学分之和
const calcGpa = (list) => {
    if (list.length === 0) return 0;   // 空数组保护，除零会产生 NaN
    const total = list.reduce((sum, s) => sum + s.point * s.credit, 0);
    const totalCredit = list.reduce((sum, s) => sum + s.credit, 0);
    return (total / totalCredit).toFixed(2);   // 保留两位小数
};

// 不及格课程名单（成绩 < 60）—— filter 筛选后用 map 只取课程名
const failed = (list) =>
    list.filter(s => s.score < 60).map(s => s.name);

// ========== 第二步输出 ==========
const clean = cleanScores(scores);     // 先清洗
const result = withPoint(clean);       // 再换算绩点

console.log('清洗后：', clean);
console.table(result);
console.log('平均绩点：', calcGpa(result));
console.log('不及格：', failed(clean));
