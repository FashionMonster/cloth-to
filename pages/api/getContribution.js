import { selectContributionInfos } from "../../infrastructure/selectContributionInfos";
import { selectCountContributionInfos } from "../../infrastructure/selectCountContributionInfos";

const IMAGE_DISPLAY_LIMIT = 9;

export default async function handler(req, res) {
  if (req.query.searchCategory === "") {
    let dataList = [];
    dataList.push({
      contributionId: "",
      imageUrl: "",
    });
    res.json({ images: dataList, pageCount: 0, totalCount: 0 });
  } else {
    try {
      //検索条件生成
      const conditions = makeQueryConditions(req.query);

      //全取得件数
      const totalCount = await selectCountContributionInfos(conditions);

      //表示ページ数取得
      const pageCount = Math.ceil(totalCount / IMAGE_DISPLAY_LIMIT);

      const offset = (req.query.page - 1) * IMAGE_DISPLAY_LIMIT;

      //Xページのデータ取得
      const dataList = await selectContributionInfos(
        conditions,
        offset,
        IMAGE_DISPLAY_LIMIT
      );

      res.json({
        images: dataList,
        pageCount: pageCount,
        totalCount: totalCount,
      });
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
}

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
