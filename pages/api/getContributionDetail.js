import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { selectContributionInfosDetail } from "../../infrastructure/selectContributionInfosDetail";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION_DETAIL, "START");
  appLogInfo(
    CONST.FILE_NAME.GET_CONTRIBUTION_DETAIL,
    "REQUEST_DATA",
    req.query
  );

  try {
    //検索条件生成
    let conditions = {
      group_id: req.query.groupId,
      contribution_id: req.query.contributionId,
      is_deleted: false,
    };

    //編集画面の場合に必要なデータ
    if (req.query.userId !== undefined) {
      conditions.user_id = req.query.userId;
    }

    const contributionDetail = await selectContributionInfosDetail(conditions);

    appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION_DETAIL, "END");

    res.json(contributionDetail);
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
