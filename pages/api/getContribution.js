import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { makeQueryConditions } from "../../apiUtils/makeQueryConditions";
import { selectContributionInfos } from "../../infrastructure/selectContributionInfos";
import { selectCountContributionInfos } from "../../infrastructure/selectCountContributionInfos";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION, "START");
  appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION, "REQUEST_DATA", req.query);

  if (req.query.searchCategory === "") {
    let dataList = [];
    dataList.push({
      contributionId: "",
      imageUrl: "",
    });

    appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION, "END");
    res.json({ images: dataList, pageCount: 0, totalCount: 0 });
  } else {
    try {
      //検索条件生成
      const conditions = makeQueryConditions(req.query);

      //全取得件数
      const totalCount = await selectCountContributionInfos(conditions);

      const offset = (req.query.page - 1) * CONST.IMAGE_DISPLAY_LIMIT;

      //Xページのデータ取得
      const dataList = await selectContributionInfos(
        conditions,
        offset,
        CONST.IMAGE_DISPLAY_LIMIT
      );

      appLogInfo(CONST.FILE_NAME.GET_CONTRIBUTION, "END");

      res.json({
        images: dataList,
        pageCount: req.query.page,
        totalCount: totalCount,
      });
    } catch (e) {
      //画面にエラー情報を返却
      throw e;
    }
  }
}
