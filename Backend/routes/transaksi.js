//import exspress
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//import model
const models = require("../models/index")
const transaksi = models.transaksi
const detail_transaksi = models.detail_transaksi

//import auth
const auth = require("../auth")
app.use(auth)

//untuk menampilkan semua data transaksi
app.get("/", auth, async (req,res) => {
    let result = await transaksi.findAll({
        include: [
            "customer",
            {
                model : models.detail_transaksi,
                as : "detail_transaksi",
                include : ["product"]
            }
        ]
    })
    res.json({
        count : result.length,
        transaksi : result
    })
})

//menampilkan data berdasarkan id
app.get("/:customer_id", async (req,res) => {
    let param = {customer_id : req.params.customer_id}
    let result = await transaksi.findAll({
        where: param,
        include: [
            "customer",
            {
                model : models.detail_transaksi,
                as: "detail_transaksi",
                include : ["product"]
            }
        ]
    })
    res.json(result)
})

//endpoint untuk menambahkan data transaksi baru
app.post("/", auth, async (req,res) => {
    let current = new Date().toISOString().split('T')[0] //memisah biar date nya saja
    let data = {
        customer_id: req.body.customer_id,
        waktu: current
    }
    transaksi.create(data)
    .then(result => {
        let lastID = result.transaksi_id
        detail = req.body.detail_transaksi
        detail.forEach(element => { //perulangan barang yang ada pada detail disimpan dalam element
            element.transaksi_id = lastID
        });
        console.log(detail);
        detail_transaksi.bulkCreate(detail) //bulkcreate create data lebih dari satu kali
        .then(result => {
            res.json({
                message: "Data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    })
    .catch(error => {
        console.log(error.message);
    })

})

//endpoint untuk mengahpus dt transaksi
app.delete("/:transaksi_id", async (req, res) =>{
    let param = { transaksi_id: req.params.transaksi_id}
    try {
        await detail_transaksi.destroy({where: param}) //menghapus detail dulu ataua anak
        await transaksi.destroy({where: param}) //baru selanjutnya hapus yang parent,  kalau insert sebaliknya
        res.json({
            message : "data has been deleted"
        })
    } catch (error) {
        res.json({
            message: error
        })
    }
})
module.exports = app
