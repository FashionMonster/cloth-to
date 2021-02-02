export default function handler(req, res) {

  if (req.method === 'POST') {
    res.status(200).json({ reqData: req.body.keyword })
  } else {
    res.status(200).json({ reqData: 'GET' })
  }
}