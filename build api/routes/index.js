const express = require('express')
const app = express()
const port = 2121
const bodyParser = require('body-parser')
const dataBase = require("../config/connection")
const responseFormat = require("./response")

const login = require("../controller/userController")
app.use("/", login)

const plastik = require("./plastik/plastik")
app.use("/plastik", plastik)

const kaca = require("./Kaca/kaca");
app.use("/kaca", kaca);

const besi = require("./Besi/besi");
app.use("/besi", besi);

const kertas = require("./Kertas/kertas");
app.use("/kertas", kertas);

const kardus = require("./Kardus/kardus");
app.use("/kardus", kardus);

const perintilan = require("./Perintilan/perintilan");
app.use("/perintilan", perintilan);

const adminController = require("../controller/adminController");
app.use("/admin", adminController);



// cara menggunakan bodyParser
app.use(bodyParser.json()) // artinya akan mengubah kiriman request dari depan ke bentuk json

app.get("/", (req, res) => {
    dataBase.query("select * from tutorial;", (error, result) => {
        // hasil dari query
        responseFormat(200, result, "success get all data from tutorial", res)
    })
})

app.get('/tutorialPopuler', (req, res) => {
    res.send({
        "status": "success",
        "tutorial": [
            {
                "id": "1",
                "title": "Introduction to Express.js",
                "author": "John Doe",
                "date": "2020-01-01",
                "views": 1000
            },
            {
                "id": "2",
                "title": "Building RESTful APIs with Node.js",
                "author": "Jane Doe",
                "date": "2020-02-01",
                "views": 500
            }
        ]
    })
})



app.get("/tutorial", (req, res) => {
    dataBase.query("select * from tutorial;", (error, result) => {
        // hasil dari query
        const query = 'SELECT tutorial.idTutorial as "id", tutorial.judul, tutorial.deskripsi, detailtutorial.alat, detailtutorial.bahan, detailtutorial.langkahKerja, detailtutorial.gambar, detailtutorial.tipeSampah, detailtutorial.jenisSampah, detailtutorial.totalView FROM tutorial, detailtutorial  WHERE tutorial.idTutorial = detailtutorial.idTutorial ORDER BY detailtutorial.totalView DESC'
        dataBase.query(query, (error, result) => {
            if (error) {
                responseFormat(500, null, "error get data from database", res)
            } else {
                responseFormat(200, result, "success get data from database", res)
            }
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})