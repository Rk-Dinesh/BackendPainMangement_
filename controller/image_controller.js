const ImageServices = require("../services/image_services")


exports.getEmail = async(req, res) => {
    try {
      const email = req.query.email;
      const detail = await ImageServices.getimage(email);
      res.status(200).send(detail);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

exports.delete = async(req, res, next)=>{
    try{
        const{email} = req.query;
        const eq = await ImageServices.deleteimage(email);
        res.status(200).json(eq)
    }catch(error){
        next(error)
    }
}