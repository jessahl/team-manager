webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var manage_players_component_1 = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
var manage_status_component_1 = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
var player_create_component_1 = __webpack_require__("../../../../../src/app/manage-players/player-create/player-create.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.ts");
var routes = [
    { path: '', redirectTo: '/manage/player/list', pathMatch: 'full' },
    { path: 'manage', component: manage_players_component_1.ManagePlayersComponent,
        children: [
            { path: 'player/list', component: player_list_component_1.PlayerListComponent },
            { path: 'player/new', component: player_create_component_1.PlayerCreateComponent }
        ]
    },
    { path: 'manageStatus', component: manage_status_component_1.ManageStatusComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nh4 {\r\n    display: inline;\r\n}\r\n\r\n.header {\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin-left: 4%;\r\n}\r\n\r\nlegend {\r\n    width: auto;\r\n    border: none;\r\n    font-size: 1.2em;\r\n}\r\n\r\nfieldset {\r\n    border: 1px groove black !important;\r\n     margin: 1% 3%; \r\n     padding: 2%;\r\n}\r\n\r\n*{\r\n    font-weight: lighter;\r\n    font-family: sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['']\">Mangage Players</a> | <a [routerLink]=\"['manageStatus']\">Manage Player Status</a>\n<fieldset>\n  <legend>Manage</legend>\n  <router-outlet></router-outlet>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var manage_players_component_1 = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
var manage_status_component_1 = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
var player_create_component_1 = __webpack_require__("../../../../../src/app/manage-players/player-create/player-create.component.ts");
var player_list_component_1 = __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                manage_players_component_1.ManagePlayersComponent,
                manage_status_component_1.ManageStatusComponent,
                player_create_component_1.PlayerCreateComponent,
                player_list_component_1.PlayerListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [data_service_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.playerData = new rxjs_1.BehaviorSubject([]);
        this.getAllPlayers();
    }
    DataService.prototype.getAllPlayers = function () {
        var _this = this;
        this._http.get('/players')
            .subscribe(function (responseData) {
            _this.playerData.next(responseData);
        });
    };
    DataService.prototype.createPlayer = function (player) {
        var _this = this;
        this._http.post('/data/player', player)
            .subscribe(function (data) {
            _this.getAllPlayers();
        });
    };
    DataService.prototype.update = function (player) {
        var _this = this;
        console.log('service.update', player);
        this._http.post('/player/edit', player)
            .subscribe(function (data) {
            _this.getAllPlayers();
        });
    };
    DataService.prototype.destroy = function (player) {
        var _this = this;
        this._http.post('/player/destroy', player)
            .subscribe(function (data) {
            _this.getAllPlayers();
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nh4 {\r\n    display: inline;\r\n}\r\n\r\n.header {\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin-left: 4%;\r\n}\r\n\r\nlegend {\r\n    width: auto;\r\n    padding: 1%;\r\n    margin-left: 5px;\r\n    border: none;\r\n    font-size: 1.2em;\r\n}\r\n\r\nfieldset {\r\n    border: 1px groove black !important;\r\n     margin: 1% 3%; \r\n     padding: 2%;\r\n}\r\n\r\n*{\r\n    font-weight: lighter;\r\n    font-family: sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.html":
/***/ (function(module, exports) {

module.exports = "<h4><a [routerLink]=\"['player/list']\">Player List</a> | <a [routerLink]=\"['player/new']\">Add Player</a></h4>\r\n\r\n<fieldset><router-outlet></router-outlet></fieldset>"

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ManagePlayersComponent = /** @class */ (function () {
    function ManagePlayersComponent() {
    }
    ManagePlayersComponent.prototype.ngOnInit = function () {
    };
    ManagePlayersComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-players',
            template: __webpack_require__("../../../../../src/app/manage-players/manage-players.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/manage-players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagePlayersComponent);
    return ManagePlayersComponent;
}());
exports.ManagePlayersComponent = ManagePlayersComponent;


/***/ }),

/***/ "../../../../../src/app/manage-players/player-create/player-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nh4 {\r\n    display: inline;\r\n}\r\n\r\n.header {\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin-left: 4%;\r\n}\r\n\r\nlegend {\r\n    width: auto;\r\n    padding: 1%;\r\n    margin-left: 5px;\r\n    border: none;\r\n    font-size: 1.2em;\r\n}\r\n\r\nfieldset {\r\n    border: 1px groove black !important;\r\n     margin: 1% 3%; \r\n     padding: 2%;\r\n}\r\n\r\n*{\r\n    font-weight: lighter;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.button{\r\n    background-color: green;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/player-create/player-create.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <h1>Add a player</h1>\n  <form (submit)=\"addPlayer()\" #newPlayerForm=\"ngForm\">\n  <label>Player's Name: </label>\n  <input type=\"text\" name=\"name\" required minlength=\"2\" [(ngModel)] = \"newPlayer.name\" #name=\"ngModel\">\n  <span class=\"error\" *ngIf=\"name.errors && name.touched\">\n    <span *ngIf = \"name.errors.required\">Name is required</span>\n    <span *ngIf = \"name.errors.touched\">Quote must be at least 2 charaters</span>\n  </span>\n  <p></p>\n  <label>Prefered Position: </label>\n  <input type=\"text\" name=\"position\" [(ngModel)]=\"newPlayer.position\" #position=\"ngModel\">\n  <br>\n  <p></p>\n  <input type=\"submit\" value=\"Add Player\" class=\"button\" [disabled]='!newPlayerForm.valid'>\n</form>\n</fieldset>"

/***/ }),

/***/ "../../../../../src/app/manage-players/player-create/player-create.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var player_1 = __webpack_require__("../../../../../src/app/player.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var PlayerCreateComponent = /** @class */ (function () {
    function PlayerCreateComponent(_data, private_router) {
        this._data = _data;
        this.newPlayer = new player_1.Player();
    }
    PlayerCreateComponent.prototype.addPlayer = function () {
        this._data.createPlayer(this.newPlayer);
        this.newPlayer = new player_1.Player();
    };
    PlayerCreateComponent.prototype.ngOnInit = function () {
    };
    PlayerCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-player-create',
            template: __webpack_require__("../../../../../src/app/manage-players/player-create/player-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/player-create/player-create.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], PlayerCreateComponent);
    return PlayerCreateComponent;
}());
exports.PlayerCreateComponent = PlayerCreateComponent;


/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nh4 {\r\n    display: inline;\r\n}\r\n\r\n.header {\r\n    display: inline-block;\r\n    width: 80%;\r\n    margin-left: 4%;\r\n}\r\n\r\nlegend {\r\n    width: auto;\r\n    padding: 1%;\r\n    margin-left: 5px;\r\n    border: none;\r\n    font-size: 1.2em;\r\n}\r\n\r\nfieldset {\r\n    border: 1px groove black !important;\r\n     margin: 1% 3%; \r\n     padding: 2%;\r\n}\r\n\r\n*{\r\n    font-weight: lighter;\r\n    font-family: sans-serif;\r\n}\r\n\r\ntable{\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n\r\nthead{\r\n    background-color: lightgray;\r\n}\r\n\r\nbutton{\r\n    background-color: red;\r\n    color: white;\r\n    width: 200px;\r\n}\r\n\r\ntd{\r\n    padding: 10px;\r\n    width: 500px !important;\r\n}\r\n\r\n.center{\r\n    margin-left: 150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Add a Player</h1>\n\n<table>\n  <thead>\n    <tr>\n      <th>Player Name</th>\n      <th>Prefered Position</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let p of allPlayers\">\n      <td>{{p.name}}</td>\n      <td>{{p.position}}</td>\n      <td><button class=\"center\" (click)=\"deletePlayer(p)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/player-list/player-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.playerData.subscribe(function (dataFromService) {
            _this.allPlayers = dataFromService;
            console.log(_this.allPlayers);
        });
        this._dataService.getAllPlayers();
    };
    PlayerListComponent.prototype.deletePlayer = function (player) {
        var _this = this;
        var del = confirm("Are you sure you want to remove " + player.name + "?");
        this._dataService.playerData.subscribe(function (dataFromService) {
            if (del) {
                _this._dataService.destroy(player);
            }
        });
        this._dataService.getAllPlayers();
    };
    PlayerListComponent = __decorate([
        core_1.Component({
            selector: 'app-player-list',
            template: __webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/player-list/player-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], PlayerListComponent);
    return PlayerListComponent;
}());
exports.PlayerListComponent = PlayerListComponent;


/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2, h4, th,{\r\n    text-align: center;\r\n}\r\n\r\n.truep {\r\n    background-color: green;\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 5px 0;\r\n    width:150px;\r\n    margin-left: 100px;\r\n    color: white;\r\n}\r\n\r\n.truen {\r\n    background-color: red;\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 5px 0;\r\n    width:150px;\r\n    margin-left: 100px;\r\n    color: white;\r\n}\r\n\r\n.trueu {\r\n    background-color: yellow;\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 5px 0;\r\n    width:150px;\r\n    margin-left: 100px;\r\n}\r\n\r\nbutton {\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 5px 0;\r\n    width:150px;\r\n    margin-left: 100px;\r\n}\r\n\r\ntable{\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    width: 100%;\r\n}\r\n\r\ntd{\r\n    padding: 10px;\r\n    width: 500px !important;\r\n}\r\n\r\nthead{\r\n    background-color: lightgray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Player Status - Game {{game}}</h2>\n<h4>\n  <a (click)=\"game1()\">Game 1</a> |\n  <a (click)=\"game2()\">Game 2</a> |\n  <a (click)=\"game3()\">Game 3</a>\n</h4>\n<p></p>\n\n<table>\n  <thead>\n    <tr>\n      <th>Player Name</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of allPlayers\">\n      <td>{{p.name}}</td>\n      <td *ngIf=\"p.games[this.gameKey]=='undecided'\">\n        <button (click)=\"playing(p)\">Playing</button>\n        <button (click)=\"notPlaying(p)\">Not Playing</button>\n        <button (click)=\"undecided(p)\" class='trueu'>Undecided</button>\n      </td>\n      <td *ngIf=\"p.games[this.gameKey]=='playing'\">\n        <button (click)=\"playing(p)\" class='truep'>Playing</button>\n        <button (click)=\"notPlaying(p)\">Not Playing</button>\n        <button (click)=\"undecided(p)\">Undecided</button>\n      </td>\n      <td *ngIf=\"p.games[this.gameKey]=='not playing'\">\n        <button (click)=\"playing(p)\">Playing</button>\n        <button (click)=\"notPlaying(p)\"  class='truen'>Not Playing</button>\n        <button (click)=\"undecided(p)\">Undecided</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/app/data.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var ManageStatusComponent = /** @class */ (function () {
    function ManageStatusComponent(_data, private_router) {
        this._data = _data;
        this.game = 1;
        this.gameKey = 'game1';
        this.allPlayers = { name: 'req.params.name', position: 'req.params.postion', games: 'req.params.game', };
    }
    ManageStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.playerData.subscribe(function (dataFromService) {
            _this.allPlayers = dataFromService;
            console.log(_this.allPlayers);
        });
        this._data.getAllPlayers();
    };
    ManageStatusComponent.prototype.savePlayer = function (player) {
        console.log('savePlayer');
        console.log(player);
        this._data.update(player);
    };
    ManageStatusComponent.prototype.game1 = function () {
        this.game = 1;
        this.gameKey = 'game1';
        console.log(this.game);
    };
    ManageStatusComponent.prototype.game2 = function () {
        this.game = 2;
        this.gameKey = 'game2';
        console.log(this.game);
    };
    ManageStatusComponent.prototype.game3 = function () {
        this.game = 3;
        this.gameKey = 'game3';
        console.log(this.game);
    };
    ManageStatusComponent.prototype.playing = function (player) {
        for (var _i = 0, _a = this.allPlayers; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p == player) {
                var key = this.gameKey;
                p.games[key] = "playing";
                console.log(p);
                this.savePlayer(p);
                break;
            }
        }
    };
    ManageStatusComponent.prototype.notPlaying = function (player) {
        for (var _i = 0, _a = this.allPlayers; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p == player) {
                var key = this.gameKey;
                p.games[key] = "not playing";
                break;
            }
        }
        this.savePlayer(player);
    };
    ManageStatusComponent.prototype.undecided = function (player) {
        for (var _i = 0, _a = this.allPlayers; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p == player) {
                var key = this.gameKey;
                p.games[key] = "undecided";
                break;
            }
        }
        this.savePlayer(player);
    };
    ManageStatusComponent = __decorate([
        core_1.Component({
            selector: 'app-manage-status',
            template: __webpack_require__("../../../../../src/app/manage-status/manage-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-status/manage-status.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, router_1.Router])
    ], ManageStatusComponent);
    return ManageStatusComponent;
}());
exports.ManageStatusComponent = ManageStatusComponent;


/***/ }),

/***/ "../../../../../src/app/player.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, position, games) {
        if (name === void 0) { name = ''; }
        if (position === void 0) { position = ''; }
        if (games === void 0) { games = { game1: 'undecided', game2: 'undecided', game3: 'undecided' }; }
        this.name = name;
        this.position = position;
        this.games = games;
    }
    return Player;
}());
exports.Player = Player;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map