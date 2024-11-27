const express = require('express');
const bodyParser = require('body-parser')
const dataBase = require("../../config/connection")
const responseFormat = require("../response")
const kardus = express.Router();

kardus.get('/', (req, res) => {
    const query = 'SELECT tutorial.idTutorial as "id", tutorial.judul, tutorial.deskripsi, detailtutorial.alat, detailtutorial.bahan, detailtutorial.langkahKerja, detailtutorial.gambar, detailtutorial.tipeSampah, detailtutorial.jenisSampah, detailtutorial.totalView FROM tutorial, detailtutorial  WHERE tutorial.idTutorial = detailtutorial.idTutorial AND detailtutorial.tipeSampah = "Botol" AND detailtutorial.jenisSampah = "kardus" ORDER BY detailtutorial.totalView DESC;'
    dataBase.query(query, (error, result) => {
        if (error) {
            responseFormat(500, null, "error get data from database kardus", res)
        } else {
            responseFormat(200, result, "success get data from database", res)
        }
    })
})

module.exports = kardus;