import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerCreateComponent } from './manage-players/player-create/player-create.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http/src/client';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    PlayerCreateComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
