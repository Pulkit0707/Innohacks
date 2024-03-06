const Router=require('express').Router();

Router.use('/products',require('./products'));
Router.use('/user',require('./user'));

module.exports=Router;