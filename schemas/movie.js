const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    nombre: {type: String,required: true},
    director: {type: String},
    clasificacion: {type: String},
    imagePath: {type: String}
},{
    timestamps: true
});
module.exports = model('movies',movieSchema);