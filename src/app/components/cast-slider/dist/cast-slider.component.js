"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CastSliderComponent = void 0;
var core_1 = require("@angular/core");
var swiper_1 = require("swiper");
var CastSliderComponent = /** @class */ (function () {
    function CastSliderComponent() {
        this.cast = [];
    }
    CastSliderComponent.prototype.ngOnInit = function () {
        // console.log(this.cast);
    };
    CastSliderComponent.prototype.ngAfterViewInit = function () {
        var swiper = new swiper_1["default"]('.swiper-container', {
            slidesPerView: 5.3,
            freeMode: true,
            spaceBetween: 15
        });
    };
    __decorate([
        core_1.Input()
    ], CastSliderComponent.prototype, "cast");
    CastSliderComponent = __decorate([
        core_1.Component({
            selector: 'app-cast-slider',
            templateUrl: './cast-slider.component.html',
            styleUrls: ['./cast-slider.component.css']
        })
    ], CastSliderComponent);
    return CastSliderComponent;
}());
exports.CastSliderComponent = CastSliderComponent;
