const express=require('express');
const app=express();
const port=6000;
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);
const path=require('path');
const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(express.json());
dotenv.config();

app.use(session({
    name: 'Innervehack',
    secret: '',
    saveUninitialized: false,
    cookie: {
        maxAge: (1000*60*100)
    },
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'disabled'
    }, function(err){
        console.log(err || 'connect-mongodb setup ok');
    })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('Error in connecting to server');
        return;
    }
    console.log(`Server connected successfully ${port}`);
});