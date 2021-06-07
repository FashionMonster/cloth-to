import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { createHashPass } from "../../apiUtils/createHashPass";
import { GroupAccount } from "../../domain/groupAccount";
import { insertGroupAccounts } from "../../infrastructure/insertGroupAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "START");
  appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "REQUEST_DATA", req.body);

  try {
    //パスワードをハッシュ化
    const hashedPass = await createHashPass(req.body.password);

    //グループ情報ドメイン
    const groupAccount = new GroupAccount({
      groupId: req.body.email,
      groupPass: hashedPass,
      groupName: req.body.groupName,
    });

    //グループ情報登録
    await insertGroupAccounts(groupAccount);

    appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "END");

    res.json({
      errorCode: null,
    });
  } catch (e) {
    //画面にエラー情報を返却
    //キー重複した場合
    if (e.parent.code === "23505") {
      res.json({
        errorCode: e.parent.code,
      });
    } else {
      throw e;
    }
  }
}
