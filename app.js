const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.get('/api/wake', cors(corsOptions), (req, res) => {
    res.json({ status: 'Server is awake' })
})

app.get('/', cors(corsOptions), (req, res) => {
    res.send('Dice Roller API is running!')
})

app.get('/api/roll', cors(corsOptions), (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1
        res.json({ result })
})


app.listen(port, () => {
    console.log(`Dice Roller API running on port ${port}`)
})