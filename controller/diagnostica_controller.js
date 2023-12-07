const DiagnosticaServices = require('../services/diagnostica_services');

exports.create = async(req, res, next)=>{
    try{
        const{data,email} = req.body;

        const successRes = await DiagnosticaServices.data(data,email);

        res.json({status: true, success: " Submittted Successfully"});

    }catch(error){
        throw error
    }
}

exports.getData = async(req, res) => {
    try {
      const email = req.query.email;
      const detail = await DiagnosticaServices.getDataByEmail(email);
      res.status(200).send(detail);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }