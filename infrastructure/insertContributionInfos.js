const models = require("../db/models");

export function insertContributionInfos(param) {
  try {
    //insert処理
    models.ContributionInfos.create({
      company_id: "test_company",
      user_id: "test_user",
      material_name: param.materialName,
      category: param.category,
      composition_1: param.composition1,
      composition_ratio_1: param.compositionRatio1,
      composition_2: param.composition2,
      composition_ratio_2: param.compositionRatio2,
      composition_3: param.composition3,
      composition_ratio_3: param.compositionRatio3,
      fabric_structure: param.fabricStructure,
      color: param.color,
      pattern: param.pattern,
      processing: param.processing,
      unit_price: param.unitPrice,
      supplier: param.supplier,
      comment: param.comment,
      is_deleted: param.isDeleted,
    }).then(console.log("【SUCCESS!!】"));
  } catch (e) {
    console.log("【ERROR!!】", e);
  }
}
