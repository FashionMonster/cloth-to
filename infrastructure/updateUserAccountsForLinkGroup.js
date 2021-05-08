import { CONST } from "../apiConstants/const";
import { appLogError } from "../apiUtils/appLogError";
import { appLogInfo } from "../apiUtils/appLogInfo";
const models = require("../db/models");

export function updateUserAccountsForLinkGroup(param) {
  appLogInfo(CONST.FILE_NAME.UPDATE_USER_ACCOUNTS_FOR_LINK_GROUP, "START");

  //update処理
  return models.UserAccounts.update(
    {
      group_id: param.groupId,
    },
    { where: { user_id: param.userId } }
  )
    .then(() => {
      appLogInfo(CONST.FILE_NAME.UPDATE_USER_ACCOUNTS_FOR_LINK_GROUP, "END");
    })
    .catch((e) => {
      appLogError(
        CONST.FILE_NAME.UPDATE_USER_ACCOUNTS_FOR_LINK_GROUP,
        "DATABASE",
        e
      );
      throw e;
    });
}
