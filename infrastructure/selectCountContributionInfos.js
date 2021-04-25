import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const models = require("../db/models");

export function selectCountContributionInfos(conditions) {
  appLogInfo(CONST.FILE_NAME.SELECT_COUNT_CONTRIBUTION_INFOS, "START");

  //select処理
  return models.ContributionInfos.count({
    where: conditions,
  })
    .then((res) => {
      appLogInfo(
        CONST.FILE_NAME.SELECT_COUNT_CONTRIBUTION_INFOS,
        "RESULT",
        res
      );
      appLogInfo(CONST.FILE_NAME.SELECT_COUNT_CONTRIBUTION_INFOS, "END");
      return res;
    })
    .catch((e) => {
      appLogError(
        CONST.FILE_NAME.SELECT_COUNT_CONTRIBUTION_INFOS,
        "DATABASE",
        e
      );
      throw e;
    });
}
