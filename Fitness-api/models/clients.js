var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Client = new Schema({ 
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }, 
    phoneNumber:{
        type: String,
        required: true
    },
    
    password:{
        type: String,
        required:true
    },
    confirmPassword:{
        type: String,
        required: true
    }
});
Client.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
Client.methods.isValid =function (hashedPassword){
    return bcrypt.compareSync(hashedPassword,this.password);
}
module.exports = mongoose.model('Clients',Client)
//Add signup






// module.exports.addsignup = function(signup, callback){
//     SignUp.create(signup, callback);
// }     




// //clients schema

// let Clients = new Schema({
   
// },
//     {
// collection: 'clients'
//     }
// );
