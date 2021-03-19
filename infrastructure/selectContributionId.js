const db = require("../db/models/index");

export function selectContributionId() {
  return db.sequelize
    .query(
      "select (last_value + 1) as contribute_id from contribution_infos_contribution_id_seq"
    )
    .then((res) => {
      //シーケンスの現在値を返却
      return res[0][0].contribute_id;
    });
}
