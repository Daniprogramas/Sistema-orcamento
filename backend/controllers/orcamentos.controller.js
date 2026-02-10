let orcamentos = []

exports.criar = (req, res) => {
  orcamentos.push(req.body)
  res.status(201).json(req.body)
}

exports.listar = (req, res) => {
  res.json(orcamentos)
}
