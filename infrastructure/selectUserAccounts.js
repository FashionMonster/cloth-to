import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectUserAccounts(email) {
  appLogInfo(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "START");

  //select処理
  return models.UserAccounts.findByPk(email)
    .then((res) => {
      const resData = getResultData(res);

      appLogInfo(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "RESULT", resData);
      appLogInfo(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "END");

      return resData;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_USER_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}

//検索結果をセットする
const getResultData = (result) => {
  return {
    userName: result.dataValues.user_name,
    groupId: result.dataValues.group_id,
  };
};
