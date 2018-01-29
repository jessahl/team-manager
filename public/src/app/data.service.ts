import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  playerData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {
    this.getAllPlayers();
   }
   getAllPlayers(){
     this._http.get('/players')
     .subscribe((responseData:any)=>{
       this.playerData.next(responseData)
     })
   }
   createPlayer(player){
     this._http.post('/data/player', player)
     .subscribe((data:any)=>{
       this.getAllPlayers();
     })
   }
   update(player){
     console.log('service.update', player);
     this._http.post('/player/edit', player)
     .subscribe((data:any)=>{
       this.getAllPlayers();
     })
   }
   destroy(player){
     this._http.post('/player/destroy', player)
     .subscribe((data:any)=>{
       this.getAllPlayers();
     })
   }
}
