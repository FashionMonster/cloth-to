import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { selectUserAccounts } from "../../infrastructure/selectUserAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.GET_USER_INFO, "START");
  appLogInfo(CONST.FILE_NAME.GET_USER_INFO, "REQUEST_DATA", req.query);

  try {
    //検索条件生成
    const userName = await selectUserAccounts(req.query.email);

    appLogInfo(CONST.FILE_NAME.GET_USER_INFO, "END");

    res.json({
      userName: userName,
    });
  } catch (e) {
    //エラー情報を返却
    throw e;
  }
}
