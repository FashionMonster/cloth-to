import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const models = require("../db/models");

export function insertUserAccounts(param) {
  appLogInfo(CONST.FILE_NAME.INSERT_USER_ACCOUNTS, "START");

  //insert処理
  return models.UserAccounts.create({
    user_id: param.userId,
    user_pass: param.userPass,
    user_name: param.userName,
    group_id: param.groupId,
  })
    .then(() => {
      appLogInfo(CONST.FILE_NAME.INSERT_USER_ACCOUNTS, "END");
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.INSERT_USER_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}
