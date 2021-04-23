const express = require('express')
const app = express()
const port = 3000

app.get('/:num', (req, res) => {
    res.send(req.params.num)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})