import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { UserAccount } from "../../domain/userAccount";
import { deleteUserAccounts } from "../../infrastructure/deleteUserAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.DELETE_USER_INFO, "START");
  appLogInfo(CONST.FILE_NAME.DELETE_USER_INFO, "REQUEST_DATA", req.body);

  try {
    //ユーザー情報ドメイン
    const userAccount = new UserAccount({
      userId: req.body.email,
    });

    //ユーザー情報削除
    await deleteUserAccounts(userAccount);

    appLogInfo(CONST.FILE_NAME.DELETE_USER_INFO, "END");

    res.json({
      res: "",
    });
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
