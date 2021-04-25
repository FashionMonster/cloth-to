import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
const models = require("../db/models");

export function selectCountContributionInfos(conditions) {
  //select処理
  return models.ContributionInfos.count({
    where: conditions,
  })
    .then((result) => {
      return result;
    })
    .catch((e) => {
      appLogError(
        CONST.FILE_NAME.SELECT_COUNT_CONTRIBUTION_INFOS,
        "database",
        e
      );
      throw e;
    });
}
