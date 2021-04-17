import { CONST } from "../../apiConstants/const";
import { appLogInfo } from "../../apiUtils/appLogInfo";
import { ContributionImage } from "../../domain/contributionImage";
import { ContributionInfo } from "../../domain/contributionInfo";
import { insertContributionImages } from "../../infrastructure/insertContributionImages";
import { insertContributionInfos } from "../../infrastructure/insertContributionInfos";
import { selectContributionId } from "../../infrastructure/selectContributionId";

export default async function handler(req, res) {
  appLogInfo(CONST.FILE_NAME_INSERTCONTRIBUTION, "start");
  appLogInfo(CONST.FILE_NAME_INSERTCONTRIBUTION, "requestData", req.body);

  //初期表示
  if (req.body.isInit) {
    appLogInfo(CONST.FILE_NAME_INSERTCONTRIBUTION, "end");
    res.json({ res: "" });
  } else {
    //投稿情報ドメイン
    const contributionInfo = new ContributionInfo({
      materialName: req.body.materialName,
      category: parseInt(req.body.category),
      composition1: parseInt(req.body.composition1),
      compositionRatio1: parseInt(req.body.compositionRatio1),
      composition2: parseInt(req.body.composition2),
      compositionRatio2: parseInt(req.body.compositionRatio2),
      composition3: parseInt(req.body.composition3),
      compositionRatio3: parseInt(req.body.compositionRatio3),
      fabricStructure: req.body.fabricStructure,
      color: parseInt(req.body.color),
      pattern: req.body.pattern,
      processing: req.body.processing,
      unitPrice: parseInt(req.body.unitPrice),
      supplier: req.body.supplier,
      comment: req.body.comment,
      isDeleted: false,
    });
    //投稿情報登録
    insertContributionInfos(contributionInfo);

    //投稿情報登録時の投稿IDを取得
    const contributeId = await selectContributionId();

    //投稿画像ドメイン
    const contributionImage = new ContributionImage({
      contributionId: contributeId,
      imageUrl1: req.body.imageUrl1,
      imageUrl2: req.body.imageUrl2,
      imageUrl3: req.body.imageUrl3,
      imageUrl4: req.body.imageUrl4,
      imageUrl5: req.body.imageUrl5,
    });

    //投稿画像
    insertContributionImages(contributionImage);

    appLogInfo(CONST.FILE_NAME_INSERTCONTRIBUTION, "end");

    res.json({ res: "" });
  }
}
