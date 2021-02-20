const models = require("../../../db/models");

let list = [];
export default function handler(req, res) {
  console.log("isInit：" + req.body.isInit);
  console.log("materialName：" + req.body.materialName);
  //初期表示
  if (req.body.isInit === 1) {
    res.json({ resData: list });
  } else {
    try {
      //insert処理
      models.ContributionInfo.create({
        contribution_id: 3,
        company_id: "test_company",
        user_id: "test_user",
        material_name: req.body.materialName,
        category: req.body.category,
        fabric_structure: req.body.fabricStructure,
        color: req.body.color,
        pattern: req.body.pattern,
        unit_price: req.body.unitPrice,
        supplier: req.body.supplier,
        comment: req.body.comment,
        is_del: "0",
      }).then(console.log("【SUCCESS!!】"));
    } catch (e) {
      console.log("【ERROR!!】", e);
    }

    res.json({ resData: list });
  }
}
