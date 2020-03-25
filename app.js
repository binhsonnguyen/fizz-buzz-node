const express = require('express')
const app = express()
const port = 3000

app.use('/fizzbuzz/:number', (req, res) => {
  res.send(req.params.number)
})

app.use('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))