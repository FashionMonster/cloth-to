import { Contribution } from "../../domain/contribution";
import { insertContribution } from "../../infrastructure/insertContribution";

export default function handler(req, res) {
  console.log("isInit：" + req.body.isInit);
  //初期表示
  if (req.body.isInit === 1) {
    res.json({ resData: "" });
  } else {
    //domain
    let contribution = new Contribution({
      materialName: req.body.materialName,
      category: req.body.category,
      fabricStructure: req.body.fabricStructure,
      color: req.body.color,
      pattern: req.body.pattern,
      unitPrice: req.body.unitPrice,
      supplier: req.body.supplier,
      comment: req.body.comment,
      isDeleted: false,
    });

    //infrastructure(insert処理)
    insertContribution(contribution);

    res.json({ resData: "" });
  }
}
