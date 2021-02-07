let list = ["Item 1", "Item 2", "Item 3"];

export default function handler(req, res) {
  if (req.query.reqData !== "") {
    list.push(req.query.reqData);
  }
  console.log(list);
  res.json({ resData: list });
}
