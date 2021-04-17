import { CONST } from "../../apiConstants/const";
import { appLogError } from "../../apiUtils/appLogError";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { makeQueryConditions } from "../../apiUtils/makeQueryConditions";
import { selectContributionInfos } from "../../infrastructure/selectContributionInfos";
import { selectCountContributionInfos } from "../../infrastructure/selectCountContributionInfos";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME_GETCONTRIBUTION, "start");
  appLogInfo(CONST.FILE_NAME_GETCONTRIBUTION, "requestData", req.query);

  if (req.query.searchCategory === "") {
    let dataList = [];
    dataList.push({
      contributionId: "",
      imageUrl: "",
    });

    appLogInfo(CONST.FILE_NAME_GETCONTRIBUTION, "end");
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

      appLogInfo(CONST.FILE_NAME_GETCONTRIBUTION, "end");

      res.json({
        images: dataList,
        pageCount: req.query.page,
        totalCount: totalCount,
      });
    } catch (e) {
      appLogError.error(CONST.FILE_NAME_GETCONTRIBUTION, "database", e);
    }
  }
}
