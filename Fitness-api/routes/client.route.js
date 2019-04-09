const express = require('express');
const app = express();
const clientRoutes = express.Router();

// Require Client model in our routes module
let Client = require('../models/clients');

clientRoutes.post('/register', function (req, res,next){
  addToDB(req, res);
});


async function addToDB(req, res){
  var client = new Client({

    fullName: req.body.fullName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: Client.hashPassword (req.body.password),
    confirmPassword:Client.hashPassword(req.body.confirmPassword) 
});
try{

  doc =await client.save(); 
return res.status(201).json(doc);
  
}
catch(err){
  return res.status(501).json(err);
}
}







module.exports = clientRoutes;

// // Defined store route
// clientRoutes.route('/add').post(function (req, res) {
//   let client = new Client(req.body);
//   client.save()
//     .then(businclientess => {
//       res.status(200).json({'business': 'business in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// })
