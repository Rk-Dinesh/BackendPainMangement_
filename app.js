const express = require('express');
const body_parser = require('body-parser');
const router = require('./routers/router');
const cors = require('cors')
const multer = require('multer');
const path = require("path");
const ImageModel = require('./model/image_model');


const app = express();

const storage = multer.diskStorage({
    destination: './img',   
    filename: (req, file, cb)=>{
      cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    } 
  })
  
  const upload = multer({ storage: storage }).single('footImage')

app.post('/upload',(req,res)=>{
    upload(req,res, (err)=>{
        if(err){
            console.log(err)
        }else{
            const newImage = new ImageModel({
                email: req.body.email,
                comment: req.body.comment,
                painrange: req.body.painrange,
                img: req.file.filename,
            })
            newImage.save().then(()=>res.send('success')).catch(err=> console.log(err))
        }
    })
})

app.use('/images', express.static('img'));

app.use(cors());
app.use(body_parser.json());
app.use('/',router);

module.exports = app;