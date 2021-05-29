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
    const contributionDetail = await selectContributionInfosDetail(req.query);

    appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION_DETAIL, "END");

    res.json(contributionDetail);
  } catch (e) {
    //画面にエラー情報を返却
    throw e;
  }
}
