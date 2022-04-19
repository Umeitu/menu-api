const { Router } = require('express');

const router = Router();

const {createuser } =require("../controllers/userController"),

router.post("/users",createuser);


module.exports = router 