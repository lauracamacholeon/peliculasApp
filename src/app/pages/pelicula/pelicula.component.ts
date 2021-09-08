import { Component, OnInit } from '@angular/core';
import { PeliculasAppService } from '../../services/peliculas-app.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { StarRatingComponent } from 'ng-starrating';
import { MovieResponse } from '../../interfaces/movie-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public id;
  public dataPelicula: MovieResponse;
  actores: Cast[] = [];

  constructor(private peliculaService: PeliculasAppService, private activatedRoute: ActivatedRoute,
    private location: Location, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   
    // para desestructurar en caso de necesitar mas argumentos
    // const {id, texto, buscar} =this.activatedRoute.snapshot.params;
  }

  ngOnInit(): void {
  
      this.obtenerPelicula();
      this.obtenerActores();

    
  }

  obtenerPelicula(){
    if (!this.id) {
      return;
    }

    this.peliculaService.peliculaConId(this.id).subscribe(data => {
      // si no existe es indefinida la variable se va a devolver a home y retornara
      if(!data){
       this.navegarAlInicio();
        return;
      }  
      this.dataPelicula = data;
    })
  }

  obtenerActores(){
    if (!this.id) {
      return;
    }
    this.peliculaService.getCast(this.id).subscribe( actor =>{
      if(actor.length<=0){
       this.navegarAlInicio()
        return;
      }
      // this.actores = actor;
      // esto se hace para que no devuelva los actores que no tienen foto:
      this.actores = actor.filter(actor => actor.profile_path != null )
      // console.log(this.actores);
    } )

  }

  regresar() {
    this.location.back();
  }

  navegarAlInicio(){
    this.router.navigateByUrl('home')
  }

}
