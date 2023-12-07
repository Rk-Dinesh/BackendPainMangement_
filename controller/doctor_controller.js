const DoctorServices = require('../services/doctor_services');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
    try {
        const { idcode,userid,firstname,lastname,email,phone,password } = req.body;

        const Res = await DoctorServices.register(userid,firstname,lastname,email,phone,password);
        let userData = { idcode,userid : userid,firstname : firstname, lastname : lastname, email : email,phone : phone };
        res.status(200).json(userData)

    } catch (error) {
        next(error)
    }
}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const Doctor = await DoctorServices.login(email, password);

        if (!Doctor) {
           return res.status(401).json({ message: 'Doctor not found' })
        }
        const isMatch = await bcrypt.compare(password,Doctor.password);

        if (!isMatch) {
           return res.status(401).json({ message: 'Invalid Password' })
        }

        const token = jwt.sign({ email: email, role: 'Admin' }, 'Hackwit', { expiresIn: '1h' });

       return  res.status(200).json({ token });

    } catch (error) {
       next(error);
        
    }
}

exports.Update = async (req,res, next) => {
    try {
        const { idcode,userid,firstname,lastname,email,phone} = req.body;
        const updateData = await DoctorServices.update(idcode,userid,firstname,lastname,email,phone);
        res.status(200).json(updateData)
    } catch (error) {
        next (error);
    }

}

exports.delete = async(req, res, next)=>{
    try{
        const{idcode} = req.query;
        const User = await DoctorServices.delete(idcode);
        res.status(200).json(User)
    }catch(error){
        next(error)
    }
}

exports.get = async(req,res,next) => {
    try {
        const {idcode} = req.query;
        const User = await DoctorServices.getUser(idcode);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

exports.getAdmin = async(req,res,next) =>{
    try {
        const Admin = await DoctorServices.getUseradmin();
        res.status(200).json(Admin)
    } catch (error) {
        
    }
}

exports.getEmail = async(req,res,next) => {
    try {
        const {email} = req.query;
        const User = await DoctorServices.getemail(email);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}


 exports.UpdatePassword = async (req, res) => {
    const email = req.params.email;
    const newPassword = req.body.password;

    try {
        const updatedDoctor = await DoctorServices.updatePassword(email, newPassword);

        if (!updatedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        res.json(updatedDoctor);
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while updating the doctor', error: err.message });
    }
};

