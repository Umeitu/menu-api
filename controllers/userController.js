const user = require("../models/userschema")
const bcrypt = require("bcrypt")
const validate = require("../config/validator")


const createUser = async(req,res) =>{
const { username, email,password } = req.body;
const valid = await validate({ username,email,password});

if (valid) {
    const hashedpassword = await bcrypt.hash(valid,password,10)
    const user = new user({
        username,
        email,
        password:hashedpassword,
    });
    await user.save();

    res.status(201).json({
        message: "Usercreate successfully",
        user,
    });
} else {
    res.status(400).json({
        message:"Invalid data", 
    });

  }

};
module.exports = {
    createUser,
};




