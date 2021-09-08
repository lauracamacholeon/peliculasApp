import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasAppService } from '../../services/peliculas-app.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  peliculas: Movie[] = [];
  peliculasSlider: Movie[] = [];

  // escuchar el window scroll
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // para asegurarme que sirva en todos los navegadores
    // si el documentElement es nulo, lo intenta con el document.body
    // 1300 de margen de error
    const posicion = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    // altura scroll
    const maximoScroll = (document.documentElement.scrollHeight || document.body.scrollHeight)
    // cuando la diferencia sea de 1000 aprox se puede decir que ya casi esta llegando al final
    if (posicion > maximoScroll) {
      // console.log("llego al final");

      // si esta cargando retorne y no haga mas asi evita el llamado multiple de getCartelera
      if(this.peliculaService.cargando){
        return;
      }

      //  vuelvo a ejecutar la funcion de obtener la cartelera
      this.peliculaService.getCartelera().subscribe(respuesta => {
        console.log(respuesta);
        // le va a añadir a lo ya traia la respuesta nueva 
        this.peliculas.push(...respuesta)
      })
    }


    // console.log(posicion, maximoScroll);
  }


  constructor(private peliculaService: PeliculasAppService) {

  }

  ngOnInit(): void {
    this.peliculaService.getCartelera().subscribe(respuesta => {
      // console.log(respuesta);
      // en respuesta.results sale el listado de las peliculas
      this.peliculas = respuesta
      // para queno se cargue denuevo el slider
      this.peliculasSlider = respuesta
    })

  }

  ngOnDestroy() {
    this.peliculaService.resetCartelera();
  }



}
