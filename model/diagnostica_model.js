const express = require("express");
const mongoose = require("mongoose");
const db = require('../config/db')

const { Schema } = mongoose;

const diagnosticaSchema = new Schema({
    data : {
        type : String,
    },
    email : {
        type : String,
    }
});

const DiagnosticaModel = db.model('Diagnostica',diagnosticaSchema);

module.exports = DiagnosticaModel;