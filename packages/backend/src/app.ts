import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Pozdro 500')
})

app.listen(port, () => {
    console.log(`Elo Ziom, nasłuchuje port ${port}`)
})