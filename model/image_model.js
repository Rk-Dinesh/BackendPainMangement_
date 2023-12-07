const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const imageSchema = new Schema({
    email:{
        type: String,
        required : true
    },
    comment:{
        type: String,
        required : true
    },
    painrange:{
        type: String,
        required : true
    },
    img:{
        type: String,
        default:""
    },


});



const ImageModel = db.model('imageAns',imageSchema);

module.exports = ImageModel;