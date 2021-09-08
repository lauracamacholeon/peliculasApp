import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slider',
  templateUrl: './cast-slider.component.html',
  styleUrls: ['./cast-slider.component.css']
})
export class CastSliderComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[] = [];


  constructor() { }

  ngOnInit(): void {
    // console.log(this.cast);
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15,

    });
  }

}
