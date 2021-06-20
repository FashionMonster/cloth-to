import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectGroupAccounts(param) {
  appLogInfo(CONST.FILE_NAME.SELECT_GROUP_ACCOUNTS, "START");

  //select処理
  return models.GroupAccounts.findByPk(param.groupId)
    .then((res) => {
      appLogInfo(CONST.FILE_NAME.SELECT_GROUP_ACCOUNTS, "RESULT", {
        group_pass: res.dataValues.group_pass,
      });
      appLogInfo(CONST.FILE_NAME.SELECT_GROUP_ACCOUNTS, "END");

      return res.dataValues.group_pass;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_GROUP_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}
