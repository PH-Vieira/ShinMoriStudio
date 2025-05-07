const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// app.use('/shop', require('./routes/shop'))
app.use('/products', require('./routes/products'))
// app.use('/orders', require('./routes/orders'))

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'))
