export default function handler(req, res) {
  res.status(200).json({
    status: true,
    message: "Cloude Hub Api Is Running"
  });
}
