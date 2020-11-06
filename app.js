let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

let app = express()

let index = require('./routes/index')
let ehl = require('./routes/ehl')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', index)
app.use('/api', ehl)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Servidor iniciado en puerto ${PORT}`)
})