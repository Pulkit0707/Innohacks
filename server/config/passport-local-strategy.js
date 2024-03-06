const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req,email,password,done){
        User.findOne({email: email})
            .then(function(user){
                if(!user || user.password != password){
                    req.flash('error','Invalid Username/Password');
                    return done(null,user);
                }
                return done(null,user);
            })
            .catch(function(err){
                return done(err);
            });
    }
));

passport.serializeUser(function(user,done){
    done(null,user.id)
});

passport.deserializeUser(function(id,done){
    User.findOne(id)
        .then(function(user){
            return done(null,user);
        })
        .catch(function(err){
            console.log('Error in finding user ---> Passport');
            return done(err);
        });
});

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;