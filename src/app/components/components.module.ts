import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { RatingModule } from 'ng-starrating';
import { CastSliderComponent } from './cast-slider/cast-slider.component';




@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterComponent,
    CastSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    
  ],
  // debo exportarlo para poder usarlo fuera de este modulo
  exports: [
    NavbarComponent,
    SliderComponent,
    PeliculasPosterComponent,
    CastSliderComponent
  ]
})
export class ComponentsModule { }
