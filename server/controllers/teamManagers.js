var mongoose = require('mongoose');
var Player = mongoose.model('Player');

module.exports={
    index: function(req,res){
        Player.find({}, function(err, allPlayers){
            if(err){
                console.log('something went wrong')
                res.json(err);
            }else{
                res.json(allPlayers);

            }
        });
    },

    create: function(req,res){
        var newPlayer = new Player(req.body);
        newPlayer.save(function(err){
            if(err){
                console.log('something went wrong')
            }else{
                console.log('saved a player')
                res.json(newPlayer);
            }
        });
    },

    remove: function(req,res){
        Player.remove({name: req.body.name}, function(err, player){
        });
    },
    
    show: function(req,res){
        Player.findOne({name: req.params.name}, function(err, player){
            if(err){
            console.log('there is an error')
            }else{
            res.json(player)
            }
        });
    },

    edit: function(req,res){
        Player.update({_id:req.body._id}, {$set: {games:req.body.games}}, function(err, player){
            console.log(req.body);
            if(err){
                console.log('cannot update')
            }else{
                console.log('updated', player)
                res.json(player)
            }
        });
    }
}