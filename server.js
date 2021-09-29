const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
  return res.json({
    "nome": "Batata kggggggggggggggggggg",
    "quantidade": 10
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})