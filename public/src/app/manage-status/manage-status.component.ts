import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Conditional } from '@angular/compiler';

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.css']
})
export class ManageStatusComponent implements OnInit {
  game: number = 1;
  gameKey: String = 'game1'
  allPlayers: any= {name:'req.params.name', position:'req.params.postion', games:'req.params.game',}

  constructor(private _data: DataService, private_router: Router) { }

  ngOnInit() {
    this._data.playerData.subscribe((dataFromService: any)=>{
      this.allPlayers = dataFromService;
      console.log(this.allPlayers);
    
    })
    this._data.getAllPlayers();
  }
  
  savePlayer(player){
    console.log('savePlayer');
    console.log(player);
    this._data.update(player)
  }
  
  game1() {
    this.game = 1;
    this.gameKey = 'game1';
    console.log(this.game)
  }

  game2() {
    this.game = 2;
    this.gameKey = 'game2';
    console.log(this.game)
  }

  game3() {
    this.game = 3;
    this.gameKey = 'game3';
    console.log(this.game)
  }

  playing(player){
    for(let p of this.allPlayers){
      if(p==player){
        let key:any = this.gameKey
        p.games[key] = "playing"
        console.log(p)
        this.savePlayer(p);
        break;
      }
    }
    
  }

  notPlaying(player){
    for(let p of this.allPlayers){
      if(p==player){
        let key:any = this.gameKey
        p.games[key] = "not playing"
        break;
      }
    }
    this.savePlayer(player);
  }

  undecided(player){
    for(let p of this.allPlayers){
      if(p==player){
        let key:any = this.gameKey
        p.games[key] = "undecided"
        break;
      }
    }
    this.savePlayer(player);
  }

}
