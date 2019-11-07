var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChambreSchema = new Schema({
  localisation:  String,
  dimension: String,
  quartier:   String,
  estCimenter:   Boolean,
  estCarreler:   Boolean,
  estLibre:   Boolean,
  estPlafonner:   Boolean,
  estModerne:   Boolean,
  aDoucheInterne:   Boolean,
  utilisateurs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur'}],
  creerLe: { type: Date, default: Date.now },
  publierLe:{type:Date,default: Date.now}
});