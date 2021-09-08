import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  buscarPelicula(texto: string) {

    texto = texto.trim();

    // para evitar que se envie informacion vacia
    if (!texto) {
      return;
    }

    // redireccion a la pagina de pelicula y de id le envia el texto buscado
    this.router.navigateByUrl(`/buscar/${texto}`)
    // console.log(texto);

  }
}
