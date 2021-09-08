import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { StarRatingComponent } from 'ng-starrating';
import { PeliculasAppService } from '../../services/peliculas-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.css']
})
export class PeliculasPosterComponent implements OnInit {

  @Input() peliculas : Movie[];

  constructor(private peliculaService: PeliculasAppService, private router: Router) {
         
   }



  ngOnInit(): void {
    // console.log(this.peliculas);
    
     
  }

  obtenerPelicula(parametro:any){
    console.log(parametro);
    this.router.navigateByUrl(`/pelicula/${parametro}`)
  }

  // onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  //   alert(`Old Value:${$event.oldValue}, 
  //     New Value: ${$event.newValue}, 
  //     Checked Color: ${$event.starRating.checkedcolor}, 
  //     Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  // }

}
