import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { uvl } from "../../apiUtils/uvl";
import { ContributionImage } from "../../domain/contributionImage";
import { ContributionInfo } from "../../domain/contributionInfo";
import { insertContributionImages } from "../../infrastructure/insertContributionImages";
import { insertContributionInfos } from "../../infrastructure/insertContributionInfos";
import { selectContributionId } from "../../infrastructure/selectContributionId";
const db = require("../../db/models/index.js");

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME.INSERT_CONTRIBUTION, "START");
  appLogInfo(CONST.FILE_NAME.INSERT_CONTRIBUTION, "REQUEST_DATA", req.body);

  //初期表示
  if (req.body.isInit) {
    appLogInfo(CONST.FILE_NAME.INSERT_CONTRIBUTION, "END");
    res.json({ res: "" });
  } else {
    //トランザクション
    const trn = await db.sequelize.transaction();

    try {
      //投稿情報ドメイン
      const contributionInfo = new ContributionInfo({
        groupId: req.body.groupId,
        userId: req.body.userId,
        materialName: req.body.materialName,
        category: uvl(req.body.category),
        composition1: uvl(req.body.composition1),
        compositionRatio1: uvl(req.body.compositionRatio1),
        composition2: uvl(req.body.composition2),
        compositionRatio2: uvl(req.body.compositionRatio2),
        composition3: uvl(req.body.composition3),
        compositionRatio3: uvl(req.body.compositionRatio3),
        fabricStructure: uvl(req.body.fabricStructure),
        color: uvl(req.body.color),
        pattern: uvl(req.body.pattern),
        processing: uvl(req.body.processing),
        unitPrice: uvl(req.body.unitPrice),
        supplier: uvl(req.body.supplier),
        comment: uvl(req.body.comment),
        isDeleted: false,
      });

      //投稿情報登録
      await insertContributionInfos(contributionInfo, trn);

      //投稿情報登録時の投稿IDを取得
      const contributeId = await selectContributionId();

      //投稿画像ドメイン
      const contributionImage = new ContributionImage({
        contributionId: contributeId,
        imageUrl1: uvl(req.body.imageUrl1),
        imageUrl2: uvl(req.body.imageUrl2),
        imageUrl3: uvl(req.body.imageUrl3),
        imageUrl4: uvl(req.body.imageUrl4),
        imageUrl5: uvl(req.body.imageUrl5),
      });

      //投稿画像
      await insertContributionImages(contributionImage, trn);

      await trn.commit();

      appLogInfo(CONST.FILE_NAME.INSERT_CONTRIBUTION, "END");

      res.json({ res: "" });
    } catch (e) {
      //ロールバック
      await trn.rollback();

      //画面にエラー情報を返却
      throw e;
    }
  }
}
