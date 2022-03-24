const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola Mundo, soy David!')
})

app.get('/proyect', (req, res) => {
    res.send('Esta es la página del proyecto 1, servidor.!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})