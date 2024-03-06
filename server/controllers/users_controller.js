const User=require('../models/user');

module.exports.create=async function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    try {
        let user=await User.findOne({email: req.body.email});
        if(!user){
            try {
                user=await User.create(req.body);
                // put correct localhost url.
                return res.redirect('http://localhost:3000/users/sign-in');
            } catch (error) {
                console.log('Error in creating user while signing up.');
            }
        }
        else{
            console.log('User already exists.');
            return res.redirect('back');
        }
    } catch (error) {
        console.log("Error in finding user in signing up.",error);
    }
};

module.exports.createSession=function(req,res){}