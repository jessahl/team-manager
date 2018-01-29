var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name: {type:String},
    position:{type: String},
    games:{type: Object}
})

mongoose.model('Player', PlayerSchema)