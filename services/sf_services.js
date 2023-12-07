const SfModel = require("../model/sf_model");


class SfServices{
    static async sfAnswers(email,sf1,sf2,sf3,sf4,sf5,sf6,sf7,sf8,sf9,sf10,sf11,sf12,sf13,sf14,sf15,sf16,sf17,sf18,sf19,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36){
        try{
            const createMoxfqAnswer = new SfModel({email,sf1,sf2,sf3,sf4,sf5,sf6,sf7,sf8,sf9,sf10,sf11,sf12,sf13,sf14,sf15,sf16,sf17,sf18,sf19,sf20,sf21,sf22,sf23,sf24,sf25,sf26,sf27,sf28,sf29,sf30,sf31,sf32,sf33,sf34,sf35,sf36});
            return await createMoxfqAnswer.save();
        }catch(err){
            throw err;
        }
    }

    static async checkuser(email){
        try{
            return await SfModel.findOne({email});

        }catch(error){
            throw error;
        }
    }

    static async  getsf(email) {
        try {
          const detail = await SfModel.find({ email: email });
          return detail;
        } catch (error) {
          throw new Error(error.message);
        }
      }

    static async deletesf(email){
        try{
            var query = {email : email};
            return await SfModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }
    
}
module.exports = SfServices;