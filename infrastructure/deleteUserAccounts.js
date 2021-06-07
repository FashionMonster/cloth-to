import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const models = require("../db/models");

export function deleteUserAccounts(param) {
  appLogInfo(CONST.FILE_NAME.DELETE_USER_ACCOUNTS, "START");

  //delete処理
  return models.UserAccounts.destroy({ where: { user_id: param.userId } })
    .then(() => {
      appLogInfo(CONST.FILE_NAME.DELETE_USER_ACCOUNTS, "END");
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.DELETE_USER_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}
