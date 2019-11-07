var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UtilisateurSchema = new Schema({
  noms:  String,
  telephone: String,
  email:   String,
  username:   String,
  chambres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Chambre'}],
  
});