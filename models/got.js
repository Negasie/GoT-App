const mongoose = require('mongoose');


const charactersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    family: {type: String},
    sigil: {type: String},
    alive: Boolean
});

const Character = mongoose.model('Character', charactersSchema);

module.exports = Character;
