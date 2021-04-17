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
  switch (param.searchCategory) {
    case "1":
      conditions = { material_name: param.keyword };
      break;
    case "2":
      conditions = { category: param.keyword };
      break;
    case "3":
      conditions = makeCompareComposition(param);
      break;
    case "4":
      conditions = { fabric_structure: param.keyword };
      break;
    case "5":
      conditions = { color: param.keyword };
      break;
    case "6":
      conditions = { pattern: param.keyword };
      break;
    case "7":
      conditions = { processing: param.keyword };
      break;
    case "8":
      switch (param.compareCondfition) {
        case "1":
          conditions = { unit_price: param.keyword };
          break;
        case "2":
          conditions = { unit_price: { $gt: param.keyword } };
          break;
        case "3":
          conditions = { unit_price: { $lt: param.keyword } };
          break;
        default:
      }
      break;
    case "9":
      conditions = { supplier: param.keyword };
      break;
    case "10":
      conditions = { user_name: param.keyword };
      break;
    default:
  }

  return conditions;
};

function makeCompareComposition(param) {
  let conditions = {};

  switch (param.compareCondfition) {
    //等しい
    case "1":
      conditions = {
        $or: [
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
        $or: [
          {
            compositon_1: param.keyword,
            compositon_ratio_1: { $gt: param.compositonRatio },
          },
          {
            compositon_2: param.keyword,
            compositon_ratio_2: { $gt: param.compositonRatio },
          },
          {
            compositon_3: param.keyword,
            compositon_ratio_3: { $gt: param.compositonRatio },
          },
        ],
      };
      break;
    //以下
    case "3":
      conditions = {
        $or: [
          {
            compositon_1: param.keyword,
            compositon_ratio_1: { $lt: param.compositonRatio },
          },
          {
            compositon_2: param.keyword,
            compositon_ratio_2: { $lt: param.compositonRatio },
          },
          {
            compositon_3: param.keyword,
            compositon_ratio_3: { $lt: param.compositonRatio },
          },
        ],
      };
      break;
    default:
  }

  return conditions;
}

export { makeQueryConditions };
