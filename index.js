const express = require('express')
const cors = require('cors')
const router = require('./routes/routes-lucas.js')

const app = express()

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000

app.get('/', (req, res) => {
  res.send('Chamou conexão com api')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})