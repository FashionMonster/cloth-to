import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const db = require("../db/models/index");

export function selectContributionId() {
  appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_ID, "START");

  return db.sequelize
    .query(
      "select last_value as contribute_id from contribution_infos_contribution_id_seq"
    )
    .then((res) => {
      //シーケンスの現在値を返却

      appLogInfo(
        CONST.FILE_NAME.SELECT_CONTRIBUTION_ID,
        "RESULT",
        res[0][0].contribute_id
      );

      appLogInfo(CONST.FILE_NAME.SELECT_CONTRIBUTION_ID, "END");
      return res[0][0].contribute_id;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_CONTRIBUTION_ID, "DATABASE", e);
      throw e;
    });
}
