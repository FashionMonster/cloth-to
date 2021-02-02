export default function handler(req, res) {

  if (req.method === 'POST') {
    res.status(200).json({ name: req.body.userId })
  } else {
    res.status(200).json({ name: 'GET' })
  }
}