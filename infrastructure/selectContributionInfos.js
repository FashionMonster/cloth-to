const models = require("../db/models");

export function selectContributionInfos(conditions) {
  //select処理
  return models.ContributionInfos.findAll({
    attributes: ["contribution_id"],
    include: [
      { model: models.ContributionImages, attributes: ["image_url_1"] },
    ],
    where: conditions,
  }).then((result) => {
    return getResultData(result);
  });
}

//検索結果をセットする
function getResultData(result) {
  let arrayData = [];
  for (let data of result) {
    arrayData.push({
      contributionId: data.dataValues.contribution_id,
      imageUrl: data.dataValues.ContributionImage.dataValues.image_url_1,
    });
  }
  return arrayData;
}
