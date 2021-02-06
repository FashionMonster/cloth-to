export default function handler(req, res) {
  res.status(200).json({ resData: req.body.reqTest });
}
