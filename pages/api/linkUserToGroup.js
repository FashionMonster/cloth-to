import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { verifyPass } from "../../apiUtils/verifyPass";
import { GroupAccount } from "../../domain/groupAccount";
import { UserAccount } from "../../domain/userAccount";
import { selectGroupAccounts } from "../../infrastructure/selectGroupAccounts";
import { updateUserAccountsForLinkGroup } from "../../infrastructure/updateUserAccountsForLinkGroup";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.LINK_USER_TO_GROUP, "START");
  appLogInfo(CONST.FILE_NAME.LINK_USER_TO_GROUP, "REQUEST_DATA", req.body);

  //グループ情報ドメイン
  const groupAccount = new GroupAccount({
    groupId: req.body.groupId,
    groupPass: req.body.password,
  });

  //ユーザー情報ドメイン
  const userAccount = new UserAccount({
    userId: req.body.userId,
    groupId: req.body.groupId,
  });

  try {
    //グループ情報(パスワード)をDBから取得
    const hashedPass = await selectGroupAccounts(groupAccount);

    //取得したグループIDに対応するパスワードが一致しているか確認
    const isVerify = await verifyPass(groupAccount.groupPass, hashedPass);

    if (isVerify) {
      //ユーザー情報更新
      await updateUserAccountsForLinkGroup(userAccount);

      appLogInfo(CONST.FILE_NAME.LINK_USER_TO_GROUP, "END");
      res.json({
        errorCode: null,
      });
    } else {
      appLogInfo(CONST.FILE_NAME.LINK_USER_TO_GROUP, "END");
      res.json({
        errorCode: "WRONG_PASSWORD",
      });
    }
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
