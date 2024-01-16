/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  
  {
    type: 1,
    count: 20,
    title: "第1组",
    text: "特别奖",
    img: "../img/数字1.png"
  },
  {
    type: 2,
    count: 20,
    text: "第1组",
    title: "",
    img: "../img/数字1.png"
  },
  {
    type: 3,
    count: 20,
    text: "第2组",
    title: "",
    img: "../img/数字2.png"
  },
  {
    type: 4,
    count: 20,
    text: "第3组",
    title: "",
    img: "../img/数字3.png"
  },
  {
    type: 5,
    count: 20,
    text: "第4组",
    title: "",
    img: "../img/数字4.png"
  },
  {
    type: 6,
    count: 20,
    text: "第5组",
    title: "",
    img: "../img/数字5.png"
  },
  {
    type: 7,
    count: 20,
    text: "第6组",
    title: "",
    img: "../img/数字6.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [20, 20, 20, 20, 20, 20,20, 20];

/**
 * 卡片公司名称标识
 */
const COMPANY = "Infiray";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
