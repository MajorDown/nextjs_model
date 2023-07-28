export async function POST(req) {
  const response = {
    status: 200,
    token: "12345678",
    userId: req.body.userId,
  };
  return JSON.stringify(response);
}
