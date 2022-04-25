const yup = require("yup")

function validate(data) {
const userschema = yup.object().shape({
    username: yup.string().required("username can't be null").min(3).max(20),
    email:yup.string().required("email can't be null").min(3).max(50),
    password:yup.string().required("password can't be null").min(3).max(50),

});




return userschema.validate(data);
}
module.exports = validate;