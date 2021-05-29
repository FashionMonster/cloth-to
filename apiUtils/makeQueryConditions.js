const db = require("../db/models/index");
const op = db.Sequelize.Op;

//検索条件生成
const makeQueryConditions = (param) => {
  //１：素材・製品名
  //２：分類
  //３：主組成
  //４：織・編地
  //５：色
  //６：柄
  //７：加工
  //８：単価
  //９：仕入先
  //１０：投稿者
  let conditions = {};

  //検索条件
  switch (param.searchCategory) {
    case "1":
      conditions = { material_name: { [op.like]: `%${param.keyword}%` } };
      break;
    case "2":
      conditions = { category: param.keyword };
      break;
    case "3":
      conditions = makeCompareComposition(param);
      break;
    case "4":
      conditions = { fabric_structure: { [op.like]: `%${param.keyword}%` } };
      break;
    case "5":
      conditions = { color: param.keyword };
      break;
    case "6":
      conditions = { pattern: { [op.like]: `%${param.keyword}%` } };
      break;
    case "7":
      conditions = { processing: { [op.like]: `%${param.keyword}%` } };
      break;
    case "8":
      switch (param.compareCondition) {
        case "1":
          conditions = { unit_price: param.keyword };
          break;
        case "2":
          conditions = { unit_price: { [op.gte]: param.keyword } };
          break;
        case "3":
          conditions = { unit_price: { [op.lte]: param.keyword } };
          break;
        default:
      }
      break;
    case "9":
      conditions = { supplier: { [op.like]: param.keyword } };
      break;
    case "10":
      conditions = { user_name: { [op.like]: param.keyword } };
      break;
    default:
  }

  //必須条件
  conditions.is_deleted = false;
  conditions.group_id = param.groupId;

  //自身の投稿履歴検索時、ユーザーIDを条件追加
  if (param.userId !== undefined) {
    conditions.user_id = param.userId;
  }

  return conditions;
};

function makeCompareComposition(param) {
  let conditions = {};

  switch (param.compareCondition) {
    //等しい
    case "1":
      conditions = {
        [op.or]: [
          {
            compositon_1: param.keyword,
            compositon_ratio_1: param.compositonRatio,
          },
          {
            compositon_2: param.keyword,
            compositon_ratio_2: param.compositonRatio,
          },
          {
            compositon_3: param.keyword,
            compositon_ratio_3: param.compositonRatio,
          },
        ],
      };
      break;
    //以上
    case "2":
      conditions = {
        [op.or]: [
          {
            compositon_1: param.keyword,
            compositon_ratio_1: { [op.gte]: param.compositonRatio },
          },
          {
            compositon_2: param.keyword,
            compositon_ratio_2: { [op.gte]: param.compositonRatio },
          },
          {
            compositon_3: param.keyword,
            compositon_ratio_3: { [op.gte]: param.compositonRatio },
          },
        ],
      };
      break;
    //以下
    case "3":
      conditions = {
        [op.or]: [
          {
            compositon_1: param.keyword,
            compositon_ratio_1: { [op.lte]: param.compositonRatio },
          },
          {
            compositon_2: param.keyword,
            compositon_ratio_2: { [op.lte]: param.compositonRatio },
          },
          {
            compositon_3: param.keyword,
            compositon_ratio_3: { [op.lte]: param.compositonRatio },
          },
        ],
      };
      break;
    default:
  }

  return conditions;
}

export { makeQueryConditions };
