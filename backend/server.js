const express = require('express')
const cors = require('cors')
const orcamentosRoutes = require('./routes/orcamentos.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/orcamentos', orcamentosRoutes)

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})
