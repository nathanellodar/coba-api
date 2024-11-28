require('@google-cloud/debug-agent').start()

const express = require('express')
const app = express()
// const port = 8000
const bodyParser = require('body-parser')
const dataBase = require("../config/connection")
const responseFormat = require("./response")

const login = require("../controller/userController")
app.use("/auth", login)

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

const admin = require("../controller/adminController");
app.use("/admin", admin);


// cara menggunakan bodyParser
app.use(bodyParser.json()) // artinya akan mengubah kiriman request dari depan ke bentuk json

app.get("/", (req, res) => {
    console.log("Response success")
    dataBase.query("select * from tutorial;", (error, result) => {
        // hasil dari query
        if (error) {
            console.log(error)
            responseFormat(500, null, "error get all data from tutorial", res)
        } else {
            responseFormat(200, result, "success get all data from tutorial", res)
        }
    })
})


app.post("/views", (req, res) => {
    const { id, jenisSampah } = req.body
    const query = 'UPDATE detailtutorial SET detailtutorial.totalView = detailtutorial.totalView + 1 WHERE detailtutorial.idTutorial = ? and detailtutorial.jenisSampah = ?'
    dataBase.query(query, [id, jenisSampah], (error, result) => {
        if (error) {
            responseFormat(500, null, "error update view", res)
        } else {
            responseFormat(201, result, "success update view", res)
        }
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log("Server is up and listening on " + PORT)
})