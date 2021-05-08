import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { selectAllGroupAccounts } from "../../infrastructure/selectAllGroupAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.GET_ALL_GROUP_INFO, "START");

  try {
    //全取得件数
    const groupInfoList = await selectAllGroupAccounts();

    appLogInfo(CONST.FILE_NAME.GET_ALL_GROUP_INFO, "END");

    res.json({
      groupInfoList: groupInfoList,
    });
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
