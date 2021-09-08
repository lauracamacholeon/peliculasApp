"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BuscarComponent = void 0;
var core_1 = require("@angular/core");
var BuscarComponent = /** @class */ (function () {
    function BuscarComponent(activatedRoute, peliculaService) {
        // esto seria si solo lo usase una vez
        // this.texto = this.activatedRoute.snapshot.paramMap.get('texto');
        // if(this.texto){
        //   this.peliculaService.buscarPelicula(this.texto).subscribe( peliculas =>{
        //       this.busquedaPeliculas = peliculas
        //       // console.log(this.busquedaPeliculas);
        //       this.texto = ''
        //   } )
        this.activatedRoute = activatedRoute;
        this.peliculaService = peliculaService;
        this.texto = '';
        this.busquedaPeliculas = [];
    }
    // console.log(this.texto);
    BuscarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // si el texto existe y no es nullo 
        // asi se hace cuando puedo seguir buscando muchas veces
        this.activatedRoute.params.subscribe(function (parametros) {
            _this.texto = parametros.texto;
            _this.peliculaService.buscarPelicula(parametros.texto).subscribe(function (peliculas) {
                _this.busquedaPeliculas = peliculas;
                // console.log(this.busquedaPeliculas);
            });
        });
    };
    BuscarComponent = __decorate([
        core_1.Component({
            selector: 'app-buscar',
            templateUrl: './buscar.component.html',
            styleUrls: ['./buscar.component.css']
        })
    ], BuscarComponent);
    return BuscarComponent;
}());
exports.BuscarComponent = BuscarComponent;
