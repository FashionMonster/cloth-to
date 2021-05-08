import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";

const models = require("../db/models");

export function selectAllGroupAccounts() {
  appLogInfo(CONST.FILE_NAME.SELECT_ALL_GROUP_ACCOUNTS, "START");

  //select処理
  return models.GroupAccounts.findAll({
    attributes: ["group_id", "group_name"],
  })
    .then((res) => {
      const resData = getResultData(res);
      appLogInfo(CONST.FILE_NAME.SELECT_ALL_GROUP_ACCOUNTS, "RESULT", resData);
      appLogInfo(CONST.FILE_NAME.SELECT_ALL_GROUP_ACCOUNTS, "END");
      return resData;
    })
    .catch((e) => {
      appLogError(CONST.FILE_NAME.SELECT_ALL_GROUP_ACCOUNTS, "DATABASE", e);
      throw e;
    });
}

//検索結果をセットする
function getResultData(result) {
  let arrayData = [];
  for (let data of result) {
    arrayData.push({
      groupId: data.dataValues.group_id,
      groupName: data.dataValues.group_name,
    });
  }
  return arrayData;
}
