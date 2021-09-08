import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasAppService } from '../../services/peliculas-app.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  texto: any = '';
  busquedaPeliculas: Movie[] = [];


  constructor(private activatedRoute: ActivatedRoute, private peliculaService: PeliculasAppService) {
    // esto seria si solo lo usase una vez
    // this.texto = this.activatedRoute.snapshot.paramMap.get('texto');
    // if(this.texto){
    //   this.peliculaService.buscarPelicula(this.texto).subscribe( peliculas =>{
    //       this.busquedaPeliculas = peliculas
    //       // console.log(this.busquedaPeliculas);
    //       this.texto = ''
    //   } )


  }


  // console.log(this.texto);


  ngOnInit(): void {

    // si el texto existe y no es nullo 
    // asi se hace cuando puedo seguir buscando muchas veces
    this.activatedRoute.params.subscribe(parametros => {
      this.texto = parametros.texto;
      this.peliculaService.buscarPelicula(parametros.texto).subscribe(peliculas => {
        this.busquedaPeliculas = peliculas;
        // console.log(this.busquedaPeliculas);
      })
    })

  }




}
