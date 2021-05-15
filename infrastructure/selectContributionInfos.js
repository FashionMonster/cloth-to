import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectContributionInfos(conditions, offset, limit) {
  appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS, "START");

  //select処理
  return models.ContributionInfos.findAll({
    attributes: ["contribution_id"],
    include: [
      {
        model: models.ContributionImages,
        attributes: ["image_url_1"],
      },
    ],
    where: conditions,
    offset: offset,
    limit: limit,
    order: [["contribution_id", "ASC"]],
  })
    .then((res) => {
      const resData = getResultData(res);
      appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS, "RESULT", resData);
      appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS, "END");
      return resData;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_CONTRIBUTION_INFOS, "DATABASE", e);
      throw e;
    });
}

//検索結果をセットする
const getResultData = (result) => {
  let arrayData = [];
  for (let data of result) {
    arrayData.push({
      contributionId: data.dataValues.contribution_id,
      imageUrl: data.dataValues.ContributionImage.dataValues.image_url_1,
    });
  }
  return arrayData;
};
