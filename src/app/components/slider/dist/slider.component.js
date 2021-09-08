"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SliderComponent = void 0;
var core_1 = require("@angular/core");
// importar el swiper
var swiper_1 = require("swiper");
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngAfterViewInit = function () {
        this.swiper = new swiper_1["default"]('.swiper-container', {
            // Optional parameters
            loop: true
        });
    };
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.slideAnterior = function () {
        this.swiper.slidePrev();
    };
    SliderComponent.prototype.slideSiguiente = function () {
        this.swiper.slideNext();
    };
    __decorate([
        core_1.Input()
    ], SliderComponent.prototype, "peliculas");
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'app-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.css']
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
