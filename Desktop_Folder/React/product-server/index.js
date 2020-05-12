const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('go to /products to see products')
})

app.get('/products', (req, res) => {

})

app.listen(4000, () => {
    console.log(`Products server listening on port 4000 `)
})