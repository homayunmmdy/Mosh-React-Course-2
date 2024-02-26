const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    }
});

const Battle = mongoose.model('Battle', battleSchema);

module.exports = Battle;