import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectUserAccounts(email) {
  appLogInfo(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "START");

  //select処理
  return models.UserAccounts.findByPk(email)
    .then((res) => {
      appLogInfo(
        CONST.FILE_NAME.SELECT_USER_ACCOUNTS,
        "RESULT",
        res.dataValues.user_name
      );
      appLogInfo(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "END");
      return res.dataValues.user_name;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}
