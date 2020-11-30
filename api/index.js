module.exports = (req, res) => {
  const result = {
    headers: req.headers,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  }

  console.log(JSON.stringify(result, null, 2))

  res.json(result)
}
