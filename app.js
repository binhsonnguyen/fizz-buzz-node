import fizzBuzz from './src/fizzbuzz'

const express = require('express')
const app = express()
const port = 3000

app.use('/fizzbuzz/:number', (req, res) => {
  const number = req.params.number
  const answer = fizzBuzz.answer(number)
  res.send(answer)
})

app.use('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
