import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { createHashPass } from "../../apiUtils/createHashPass";
import { UserAccount } from "../../domain/userAccount";
import { insertUserAccounts } from "../../infrastructure/insertUserAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.SIGNUP, "START");
  appLogInfo(CONST.FILE_NAME.SIGNUP, "REQUEST_DATA", req.body);

  try {
    //パスワードをハッシュ化
    var hashedPass = await createHashPass(req.body.password);

    //ユーザー情報ドメイン
    const userAccount = new UserAccount({
      userId: req.body.email,
      userPass: hashedPass,
      userName: req.body.userName,
      groupId: null,
    });

    //ユーザー情報登録
    await insertUserAccounts(userAccount);

    appLogInfo(CONST.FILE_NAME.SIGNUP, "END");

    res.json({
      res: "",
    });
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
