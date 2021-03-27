import { selectContributionInfos } from "../../infrastructure/selectContributionInfos";

export default async function handler(req, res) {
  if (req.query.searchCategory === "") {
    let dataList = [];
    dataList.push({
      contributionId: "",
      imageUrl: "",
    });
    res.json(dataList);
  } else {
    try {
      const conditions = makeQueryConditions(req.query);
      const dataList = await selectContributionInfos(conditions);
      res.json(dataList);
    } catch (e) {
      console.log("ERROR!", e);
    }
  }
}

//検索条件生成
function makeQueryConditions(param) {
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
      conditions = { compositon: param.keyword };
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
      conditions = { unit_price: param.keyword };
      break;
    case "9":
      conditions = { supplier: param.keyword };
      break;
    // case "10":
    //   conditions = { user_name: param.keyword };
    //   break;
    default:
  }

  return conditions;
}
