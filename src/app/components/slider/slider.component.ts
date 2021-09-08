import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
// importar el swiper
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() peliculas: Movie[];
  swiper: Swiper ;

  constructor() { }

  ngAfterViewInit(): void {
     this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    });    
  }

  ngOnInit(): void {
    
  }

  slideAnterior() { 
  this.swiper.slidePrev()
  }

  slideSiguiente() { 
  this.swiper.slideNext()
  }


}
