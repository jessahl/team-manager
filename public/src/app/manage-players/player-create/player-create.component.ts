import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  newPlayer: Player = new Player();
  constructor(private _data: DataService, private_router: Router) { }

  addPlayer(){
    this._data.createPlayer(this.newPlayer)
    this.newPlayer = new Player();
  }
  ngOnInit() {
  }

}
