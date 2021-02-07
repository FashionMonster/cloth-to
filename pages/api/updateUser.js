export default function handler(req, res) {
  console.log(req.body.userId);
  res.status(200).json({ resUserId: req.body.userId });
}
