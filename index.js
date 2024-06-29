const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const connect = require('./connect')

const ItemRoute = require('./routes/Item')

const BillRoute = require('./routes/Bill')

const userRoute = require('./routes/User')

app.use(cors())

app.use(express.json())

app.use('/api/items',ItemRoute)

app.use('/api/bills',BillRoute)

app.use('/api/users',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`)
})