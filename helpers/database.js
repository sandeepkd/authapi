var mongoose = require('mongoose');

exports.connection = function(){
    
    mongoose.connect('mongodb://localhost:27017/ngAuth', { useNewUrlParser: true}, function(err){

        if(!err){

            console.log('DB connected');

        }
    });
}
