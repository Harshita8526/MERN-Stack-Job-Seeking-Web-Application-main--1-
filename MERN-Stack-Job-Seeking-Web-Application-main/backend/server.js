import app from "./app.js";
import cloudinary from "cloudinary";
import path from 'path';
import express from 'express';
import multer from 'multer';

//const app=express();
//yahan se
const PORT=4000;

//const upload=multer({dest:"uploads/"});

const storage=multer.diskStorage({
  destination:function(req,file,cb){
    return cb(null,"./uploads");
  },
  filename:function(req,file,cb){
    return cb(null,`${Date.now()}-${file.originalname}`);
  },
});

const upload=multer({storage})

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  return res.render("homepage");
})

app.post('/uploads',upload.single("profileImage"),(req,res)=>{
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
});

//yahan tak

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});

