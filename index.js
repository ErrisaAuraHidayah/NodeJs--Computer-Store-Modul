'use strict'
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

//endpoint nanti ditambahkan disini
//admin
app.use("/admin", require('./routes/admin-route'))

//endpoint customer
const customer = require('./routes/customer')
app.use("/customer", customer)

//run server
const port = 3000
app.listen(port, ()=>{
    console.log(`App running in server ${port}`)
})