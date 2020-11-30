module.exports = (req, res) => {
  res.json({
    headers: req.headers,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  })
}
