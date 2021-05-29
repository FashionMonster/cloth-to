import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectContributionInfosDetail(param) {
  appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS_DETAIL, "START");

  //select処理
  return models.ContributionInfos.findOne({
    attributes: [
      "material_name",
      "category",
      "composition_1",
      "composition_ratio_1",
      "composition_2",
      "composition_ratio_2",
      "composition_3",
      "composition_ratio_3",
      "fabric_structure",
      "color",
      "pattern",
      "processing",
      "unit_price",
      "supplier",
      "comment",
    ],
    include: [
      {
        model: models.ContributionImages,
        attributes: [
          "image_url_1",
          "image_url_2",
          "image_url_3",
          "image_url_4",
          "image_url_5",
        ],
      },
    ],
    where: {
      group_id: param.groupId,
      user_id: param.userId,
      contribution_id: param.contributionId,
      is_deleted: false,
    },
  })
    .then((res) => {
      const resData = getResultData(res);
      appLogInfo(
        CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS_DETAIL,
        "RESULT",
        resData
      );
      appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS_DETAIL, "END");
      return resData;
    })
    .catch((e) => {
      appLogError(
        CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS_DETAIL,
        "DATABASE",
        e
      );
      throw e;
    });
}

//検索結果をセットする
const getResultData = (result) => {
  //画像データは配列形式でセット
  let imageUrl = [];
  imageUrl.push(result.dataValues.ContributionImage.dataValues.image_url_1);
  imageUrl.push(result.dataValues.ContributionImage.dataValues.image_url_2);
  imageUrl.push(result.dataValues.ContributionImage.dataValues.image_url_3);
  imageUrl.push(result.dataValues.ContributionImage.dataValues.image_url_4);
  imageUrl.push(result.dataValues.ContributionImage.dataValues.image_url_5);

  return {
    materialName: result.dataValues.material_name,
    category: result.dataValues.category,
    composition1: result.dataValues.composition_1,
    compositionRatio1: result.dataValues.composition_ratio_1,
    composition2: result.dataValues.composition_2,
    compositionRatio2: result.dataValues.composition_ratio_2,
    composition3: result.dataValues.composition_3,
    compositionRatio3: result.dataValues.composition_ratio_3,
    fabricStructure: result.dataValues.fabric_structure,
    color: result.dataValues.color,
    pattern: result.dataValues.pattern,
    processing: result.dataValues.processing,
    unitPrice: result.dataValues.unit_price,
    supplier: result.dataValues.supplier,
    comment: result.dataValues.comment,
    imageUrl: imageUrl,
  };
};
