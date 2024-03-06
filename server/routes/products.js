const Router=require('express').Router();
const productsController=require('../controllers/products_controller')

Router.use('/create',productsController.create);

module.exports=Router;