const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/innervehack');

const db=mongoose.connection;

db.on('error',console.error.bind(console, 'Error in connecting to databse'));

db.once('open',function(){
    console.log('Server connected to database successfully.');
});

module.exports=db;