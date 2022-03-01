'use strict'
const express = require('express')

const app = express()
app.use(express.json())



app.use("/admin", require('./routes/admin-route'))

const port = 3000
app.listen(port, ()=>{
    console.log(`App running in server ${port}`)
})