import { Component, OnInit } from '@angular/core';
import { ConstAplicacion } from 'src/app/shared/constantes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  actived: boolean = true;
  usuarioLogeado: string = ConstAplicacion.EMPTY;

  constructor() {
    this.usuarioLogeado = sessionStorage.getItem(ConstAplicacion.VAR_USER_SESSION_STORAGE);
  }

  ngOnInit(): void {
    this.usuarioLogeado = sessionStorage.getItem(ConstAplicacion.VAR_USER_SESSION_STORAGE);
  }

}
