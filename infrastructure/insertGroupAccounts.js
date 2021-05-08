import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const models = require("../db/models");

export function insertGroupAccounts(param) {
  appLogInfo(CONST.FILE_NAME.INSERT_GROUP_ACCOUNTS, "START");

  //insert処理
  return models.GroupAccounts.create({
    group_id: param.groupId,
    group_pass: param.groupPass,
    group_name: param.groupName,
  })
    .then(() => {
      appLogInfo(CONST.FILE_NAME.INSERT_GROUP_ACCOUNTS, "END");
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.INSERT_GROUP_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}
