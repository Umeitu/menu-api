const User = require("../models/userschema")
const bcrypt = require("bcryptjs")
const validate = require("../config/validator")
const {generateToken }=require( "../utils/generateToken");
 

const createUser = async(req,res) =>{
const { username, email,password } = req.body;
const valid = await validate({ username,email,password});

if (valid) {
    const hashedpassword = await bcrypt.hash(valid,password,10)
    const user = await User.create({
        username,
        email,
        password:hashedpassword,
    });
    
if (user) {
    res.status(201).json({
       username:user.username,
        email:user.email,
        id:user.id,
        Token:generateToken
    });
}
} else {
    res.status(400).json({
        message:"Invalid data", 
    });

  }

};
module.exports = {createUser};




