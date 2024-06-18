const express = require('express')
const app = express()
const port = process.env.PORT || 400

app.get('/', (req, res) => {
  res.send('xor')
})

//for only host
app.get('/host', (req, res) => {
  res.send('[host]')
})

//for various clients
app.get('/001', (req, res) => {
  res.send('> ')

})


app.listen(port, () => {
  console.log(`port : ${port}`)
})