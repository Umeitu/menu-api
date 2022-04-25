const jwt = require("jsonwebtoken");
const User= require("../models/userschema")

exports.protect =  async function ( req, res, next) {
    let token; 
if( req.headers.authorization ) {
    try{
        token = req.headers.authorization;
        const decoded =jwt.verify(token,process.env.jwt_SERECT);
        req.user = await User.findById(decoded.id);
        next();
    }catch (err) {
        req.status(401).json({
            message:"Invalid token"
        });
    }
    } 
  
   if (!token){
       res,status(401).json({
        message:"you are not Authorized"   
       })
   }     

};