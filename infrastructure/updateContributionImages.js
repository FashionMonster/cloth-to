import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function updateContributionImages(param, trn) {
  appLogInfo(CONST.FILE_NAME.UPDATE_CONTRIBUTION_IMAGES, "START");

  //update処理
  return models.ContributionImages.update(
    {
      image_url_1: param.imageUrl1,
      image_url_2: param.imageUrl2,
      image_url_3: param.imageUrl3,
      image_url_4: param.imageUrl4,
      image_url_5: param.imageUrl5,
    },
    { where: { contribution_id: param.contributionId }, transaction: trn }
  )
    .then(() => {
      appLogInfo(CONST.FILE_NAME.UPDATE_CONTRIBUTION_IMAGES, "END");
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.UPDATE_CONTRIBUTION_IMAGES, "DATABASE", e);
      throw e;
    });
}
