const EqModel = require("../model/eq_model");


class EqServices{
    static async eqAnswers(email,eq1,eq2,eq3,eq4,eq5,eq6){
        try{
            const createEqAnswer = new EqModel({email,eq1,eq2,eq3,eq4,eq5,eq6});
            return await createEqAnswer.save();
        }catch(err){
            throw err;
        }
    }

    static async checkuser(email){
        try{
            return await EqModel.findOne({email});

        }catch(error){
            throw error;
        }
    }

    static async  geteq(email) {
        try {
          const detail = await EqModel.find({ email: email });
          return detail;
        } catch (error) {
          throw new Error(error.message);
        }
      }

    static async deleteeq(email){
        try{
            var query = {email : email};
            return await EqModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }
}
module.exports = EqServices;