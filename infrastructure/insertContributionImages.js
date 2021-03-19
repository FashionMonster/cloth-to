const models = require("../db/models");

export function insertContributionImages(param) {
  try {
    //insert処理
    models.ContributionImages.create({
      contribution_id: param.contributionId,
      image_url_1: param.imageUrl1,
      image_url_2: param.imageUrl2,
      image_url_3: param.imageUrl3,
      image_url_4: param.imageUrl4,
      image_url_5: param.imageUrl5,
    }).then(console.log("【SUCCESS!!】"));
  } catch (e) {
    console.log("【ERROR!!】", e);
  }
}
