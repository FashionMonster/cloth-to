const models = require("../db/models");

export function selectCountContributionInfos(conditions) {
  //select処理
  return models.ContributionInfos.count({
    where: conditions,
  }).then((result) => {
    return result;
  });
}
