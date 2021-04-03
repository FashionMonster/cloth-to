const models = require("../db/models");

export function selectContributionInfos(conditions, offset, limit) {
  //select処理
  return models.ContributionInfos.findAll({
    attributes: ["contribution_id", "created_at"],
    include: [
      { model: models.ContributionImages, attributes: ["image_url_1"] },
    ],
    where: conditions,
    offset: offset,
    limit: limit,
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
      created_at: data.dataValues.created_at,
      imageUrl: data.dataValues.ContributionImage.dataValues.image_url_1,
    });
  }
  return arrayData;
}
