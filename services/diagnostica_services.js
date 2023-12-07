const DiagnosticaModel = require('../model/diagnostica_model');

class DiagnosticaServices {
    static async data(data,email){
        try{
            const Data = new DiagnosticaModel({data,email});
            return await Data.save();
        }catch(err){
            throw err;
        }
    }

    static async  getDataByEmail(email) {
        try {
          const detail = await DiagnosticaModel.find({ email: email });
          return detail;
        } catch (error) {
          throw new Error(error.message);
        }
      }
}

module.exports = DiagnosticaServices;