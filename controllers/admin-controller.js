'use strict'

//memanggil file model untuk admin
let modelAdmin = require("../models/index").admin //ini merujuk ke file model admin

module.exports = {
    //ini untuk menambahkan admin
    async addAdmin(req,res) {
        let admin = await models.Admin.create({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })

        return res.send({
            data: admin
        })
    }
    
}





