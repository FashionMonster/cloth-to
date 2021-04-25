import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function insertContributionImages(param) {
  appLogInfo(CONST.FILE_NAME.INSERT_CONTRIBUTION_INFOS, "start");

  //insert処理
  return models.ContributionImages.create({
    contribution_id: param.contributionId,
    image_url_1: param.imageUrl1,
    image_url_2: param.imageUrl2,
    image_url_3: param.imageUrl3,
    image_url_4: param.imageUrl4,
    image_url_5: param.imageUrl5,
  }).catch((e) => {
    appLogError(CONST.FILE_NAME.INSERT_CONTRIBUTION_INFOS, "database", e);
    throw e;
  });
}
