// 10 门课程数据：课程名 / 学分 / 百分制成绩
// 注意：里面有两条非法数据（105 和 -3），第二步再处理
const courses = [
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

console.table(courses);
