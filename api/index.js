module.exports = (req, res) => {
  const result = {
    headers: req.headers,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  }

  console.log(result)

  res.json(result)
}
