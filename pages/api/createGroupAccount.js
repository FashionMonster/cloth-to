import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { uvl } from "../../apiUtils/uvl";
import { GroupAccount } from "../../domain/groupAccount";
import { insertGroupAccounts } from "../../infrastructure/insertGroupAccounts";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "START");
  appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "REQUEST_DATA", req.body);

  try {
    //グループ情報ドメイン
    const groupAccount = new GroupAccount({
      groupId: uvl(req.body.email),
      groupPass: uvl(req.body.password),
      groupName: uvl(req.body.groupName),
    });

    //グループ情報登録
    await insertGroupAccounts(groupAccount);

    appLogInfo(CONST.FILE_NAME.CREATE_GROUP_ACCOUNT, "END");

    res.json({
      errorCode: null,
    });
  } catch (e) {
    //画面にエラー情報を返却
    res.json({
      errorCode: e.parent.code,
    });
  }
}
