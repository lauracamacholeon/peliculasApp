"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PeliculasPosterComponent = void 0;
var core_1 = require("@angular/core");
var PeliculasPosterComponent = /** @class */ (function () {
    function PeliculasPosterComponent(peliculaService, router) {
        this.peliculaService = peliculaService;
        this.router = router;
    }
    PeliculasPosterComponent.prototype.ngOnInit = function () {
        // console.log(this.peliculas);
    };
    PeliculasPosterComponent.prototype.obtenerPelicula = function (parametro) {
        console.log(parametro);
        this.router.navigateByUrl("/pelicula/" + parametro);
    };
    __decorate([
        core_1.Input()
    ], PeliculasPosterComponent.prototype, "peliculas");
    PeliculasPosterComponent = __decorate([
        core_1.Component({
            selector: 'app-peliculas-poster',
            templateUrl: './peliculas-poster.component.html',
            styleUrls: ['./peliculas-poster.component.css']
        })
    ], PeliculasPosterComponent);
    return PeliculasPosterComponent;
}());
exports.PeliculasPosterComponent = PeliculasPosterComponent;
