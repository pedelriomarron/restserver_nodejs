require("./config/config")
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./routes/usuario'))

app.get('/', (req, res) => {
    res.json("get Usuario")
})



mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
    if (err) throw new Error("No se ha podido conectar")

    console.log('Base de datos online')
})


app.listen(process.env.PORT, () => {
    console.log(`Escuchando peteciones por el puerto ${process.env.PORT}`)
})