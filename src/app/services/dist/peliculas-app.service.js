"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PeliculasAppService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("../../environments/environment");
var operators_1 = require("rxjs/operators");
var PeliculasAppService = /** @class */ (function () {
    function PeliculasAppService(http) {
        this.http = http;
        // lo coloque en el archivo de environments
        // private url = 'https://api.themoviedb.org/3/movie/';
        // private apiKey = '856e49de4c163d7ec8e164c7211941c8';
        // para  prevenir la carga desmesurada de la api
        this.cargando = false;
        this.page = 1;
        // console.log("servicio importado");
    }
    Object.defineProperty(PeliculasAppService.prototype, "params", {
        get: function () {
            return {
                api_key: '856e49de4c163d7ec8e164c7211941c8',
                language: 'es-ES',
                page: this.page
            };
        },
        enumerable: false,
        configurable: true
    });
    PeliculasAppService.prototype.getCartelera = function () {
        var _this = this;
        if (this.cargando) {
            return rxjs_1.of([]);
        }
        // va a empezar a cargar
        this.cargando = true;
        // console.log("get api");
        return this.http.get(environment_1.environment.url + "movie/now_playing", {
            params: this.params
        }).pipe(operators_1.map(function (resp) { return resp.results; }), (operators_1.tap(function () {
            _this.page += 1;
            // cuando ya pase la pagina ya cargo
            _this.cargando = false;
        })));
    };
    PeliculasAppService.prototype.buscarPelicula = function (texto) {
        var params2 = __assign(__assign({}, this.params), { query: texto });
        // eliminarle la pagina para que no lo envie en la peticion get
        delete params2.page;
        // console.log(params2);
        return this.http.get(environment_1.environment.url + "search/movie?", {
            params: params2
        }).pipe(operators_1.map(function (resp) { return resp.results; }));
    };
    PeliculasAppService.prototype.resetCartelera = function () {
        this.page = 1;
    };
    PeliculasAppService.prototype.peliculaConId = function (parametro) {
        var params2 = __assign({}, this.params);
        delete params2.page;
        var vacio;
        // console.log(parametro);
        return this.http.get(environment_1.environment.url + "/movie/" + parametro, { params: params2 })
            .pipe(operators_1.catchError(function (err) { return rxjs_1.of(vacio); }));
    };
    PeliculasAppService.prototype.getCast = function (idPelicula) {
        return this.http.get(environment_1.environment.url + "/movie/" + idPelicula + "/credits", { params: this.params })
            .pipe(operators_1.map(function (cast) { return cast.cast; }), operators_1.catchError(function (err) { return rxjs_1.of([]); }));
    };
    PeliculasAppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PeliculasAppService);
    return PeliculasAppService;
}());
exports.PeliculasAppService = PeliculasAppService;
