const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const patientSchema = new Schema({
    fname:{
        type: String,
        required : true
    },
    lname:{
        type: String,
        required : true
    },
    dob:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true    
    },
    phone:{
        type: String,
        required : true
    },
    address:{
        type: String,
        required : true
    },
    state:{
        type: String,
        required : true
    },
    postcode:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },

});

patientSchema.pre('save', async function(){
    try{
        var patient = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(patient.password,salt);
        patient.password = hashpass;

    }catch(error){
        throw error
    }

});


patientSchema.methods.comparePassword = async function(userPasword){
    try{
        const isMatch = await bcrypt.compare(userPasword, this.password);
        return isMatch;

    }catch(error){
        throw error
    }
}

const PatientModel = db.model('patient',patientSchema);

module.exports = PatientModel;