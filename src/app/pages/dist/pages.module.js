"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PagesModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home/home.component");
var pelicula_component_1 = require("./pelicula/pelicula.component");
var buscar_component_1 = require("./buscar/buscar.component");
var components_module_1 = require("../components/components.module");
var ng_starrating_1 = require("ng-starrating");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [
                home_component_1.HomeComponent,
                pelicula_component_1.PeliculaComponent,
                buscar_component_1.BuscarComponent,
            ],
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                ng_starrating_1.RatingModule
            ]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
