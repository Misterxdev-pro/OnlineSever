export default function handler(req, res) {
  res.status(200).json({
    status: true,
    message: "ANS API is working!"
  });
}
