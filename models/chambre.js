var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChambreSchema = new Schema({
  localisation:  String,
  description: String,
  dimension: String,
  quartier:   String,
  estCimenter:   Boolean,
  estCarreler:   Boolean,
  estLibre:   Boolean,
  estPlafonner:   Boolean,
  estModerne:   Boolean,
  prix: Number,
  nombreMois:Number,
  aDoucheInterne:   Boolean,
  utilisateurs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur'}],
  creerLe: { type: Date, default: Date.now },
  publierLe:{type:Date,default: Date.now}
});
