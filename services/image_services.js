const ImageModel = require('../model/image_model');

class ImageServices{
    

    static async  getimage(email) {
        try {
          const detail = await ImageModel.find({ email: email });
          return detail;
        } catch (error) {
          throw new Error(error.message);
        }
      }

    static async deleteimage(email){
        try{
            var query = {email : email};
            return await ImageModel.findOneAndDelete(query);

        }catch(error){
            throw error;
        }
    }
}
module.exports = ImageServices;