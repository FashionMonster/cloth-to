const models = require("../db/models");

export function insertContribution(contribution) {
  try {
    //insert処理
    models.ContributionInfo.create({
      contribution_id: 6,
      company_id: "test_company",
      user_id: "test_user",
      material_name: contribution.materialName,
      category: contribution.category,
      fabric_structure: contribution.fabricStructure,
      color: contribution.color,
      pattern: contribution.pattern,
      unit_price: contribution.unitPrice,
      supplier: contribution.supplier,
      comment: contribution.comment,
      is_del: "0",
    }).then(console.log("【SUCCESS!!】"));
  } catch (e) {
    console.log("【ERROR!!】", e);
  }
}
