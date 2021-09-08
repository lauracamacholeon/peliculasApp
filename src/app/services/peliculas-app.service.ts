import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from "rxjs/operators";
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsResponse, Cast } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasAppService {

  // lo coloque en el archivo de environments
  // private url = 'https://api.themoviedb.org/3/movie/';
  // private apiKey = '856e49de4c163d7ec8e164c7211941c8';

  // para  prevenir la carga desmesurada de la api
  cargando: boolean = false;
  private page?: any = 1;

  get params() {
    return {
      api_key: '856e49de4c163d7ec8e164c7211941c8',
      language: 'es-ES',
      page: this.page
    }
  }


  constructor(private http: HttpClient) {
    // console.log("servicio importado");
  }


  getCartelera(): Observable<Movie[]> {

    if (this.cargando) {
      return of([])
    }

    // va a empezar a cargar
    this.cargando = true;

    // console.log("get api");

    return this.http.get<Movie[]>(`${environment.url}movie/now_playing`, {
      params: this.params
    }).pipe(map((resp: any) => resp.results),
      (tap(() => {
        this.page += 1
        // cuando ya pase la pagina ya cargo
        this.cargando = false;
      })));
    }

  buscarPelicula(texto: string) {

    const params2 = { ...this.params, query: texto }
    // eliminarle la pagina para que no lo envie en la peticion get
    delete params2.page
    // console.log(params2);

    return this.http.get<CarteleraResponse>(`${environment.url}search/movie?`, {
      params: params2
    }).pipe(map(resp => resp.results))


  }

  resetCartelera() {
    this.page = 1;
  }

  peliculaConId(parametro: string) {
    let params2 = { ...this.params };
    delete params2.page;
    let vacio: MovieResponse

    // console.log(parametro);
    return this.http.get<MovieResponse>(`${environment.url}/movie/${parametro}`, {params: params2})
    .pipe( catchError ( err=> of( vacio )  ))
  }

  getCast(idPelicula:string){
  
      return this.http.get<CreditsResponse>(`${environment.url}/movie/${idPelicula}/credits`, 
      { params: this.params })
      .pipe( map ( cast => cast.cast ), catchError ( err=> of( [] )  ) )
  }


}
