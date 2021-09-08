"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PeliculaComponent = void 0;
var core_1 = require("@angular/core");
var PeliculaComponent = /** @class */ (function () {
    function PeliculaComponent(peliculaService, activatedRoute, location, router) {
        this.peliculaService = peliculaService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.router = router;
        this.actores = [];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        // para desestructurar en caso de necesitar mas argumentos
        // const {id, texto, buscar} =this.activatedRoute.snapshot.params;
    }
    PeliculaComponent.prototype.ngOnInit = function () {
        this.obtenerPelicula();
        this.obtenerActores();
    };
    PeliculaComponent.prototype.obtenerPelicula = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        this.peliculaService.peliculaConId(this.id).subscribe(function (data) {
            // si no existe es indefinida la variable se va a devolver a home y retornara
            if (!data) {
                _this.navegarAlInicio();
                return;
            }
            _this.dataPelicula = data;
        });
    };
    PeliculaComponent.prototype.obtenerActores = function () {
        var _this = this;
        if (!this.id) {
            return;
        }
        this.peliculaService.getCast(this.id).subscribe(function (actor) {
            if (actor.length <= 0) {
                _this.navegarAlInicio();
                return;
            }
            // this.actores = actor;
            // esto se hace para que no devuelva los actores que no tienen foto:
            _this.actores = actor.filter(function (actor) { return actor.profile_path != null; });
            // console.log(this.actores);
        });
    };
    PeliculaComponent.prototype.regresar = function () {
        this.location.back();
    };
    PeliculaComponent.prototype.navegarAlInicio = function () {
        this.router.navigateByUrl('home');
    };
    PeliculaComponent = __decorate([
        core_1.Component({
            selector: 'app-pelicula',
            templateUrl: './pelicula.component.html',
            styleUrls: ['./pelicula.component.css']
        })
    ], PeliculaComponent);
    return PeliculaComponent;
}());
exports.PeliculaComponent = PeliculaComponent;
