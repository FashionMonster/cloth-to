import { Contribution } from "../../domain/contribution";
import { insertContribution } from "../../infrastructure/insertContribution";

export default function handler(req, res) {
  console.log("isInit：" + req.body.isInit);
  //初期表示
  if (req.body.isInit === 1) {
    res.json({ resData: "" });
  } else {
    //domain
    let contribution = new Contribution(
      req.body.materialName,
      req.body.category,
      req.body.fabricStructure,
      req.body.color,
      req.body.pattern,
      req.body.unitPrice,
      req.body.supplier,
      req.body.comment,
      "0"
    );

    //infrastructure(insert処理)
    insertContribution(contribution);

    res.json({ resData: "" });
  }
}
