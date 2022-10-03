function getILoveDogs(req, res) {
  const request = req.query.breed;
  res.status(200);
  res.json({ message: `I love ${request}` });
}

export default getILoveDogs;
