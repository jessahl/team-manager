// var TeamManagers = require('./../controllers/teamManagers.js');
var mongoose = require('mongoose');
var Player = mongoose.model('Player');
var players = require('../controllers/teamManagers.js')

module.exports = function(app){
    app.get('/players', players.index);
    app.post('/data/player', players.create);
    app.post('/player/destroy', players.remove);
    app.post('/player/edit', players.edit);
}