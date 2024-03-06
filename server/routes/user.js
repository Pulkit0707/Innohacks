const Router=require('express')=Router();
const userController=require('../controllers/users_controller');

Router.post('/create',userController.create);
Router.post('/create-session',userController.createSession);

module.exports=Router;