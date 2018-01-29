import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Player } from '../../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  allPlayers: Array<Player>;

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    this._dataService.playerData.subscribe((dataFromService: any)=>{
      this.allPlayers = dataFromService;
      console.log(this.allPlayers);
    })
    this._dataService.getAllPlayers();
  }
  deletePlayer(player){
    let del = confirm(`Are you sure you want to remove ${player.name}?`);
    this._dataService.playerData.subscribe((dataFromService:any)=>{
      if(del){
        this._dataService.destroy(player)
      }
    })
    this._dataService.getAllPlayers();
  }
}

