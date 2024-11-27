const express = require('express')
const app = express()
const port = 3000

// routes utama URL/endpoint kita method get
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})