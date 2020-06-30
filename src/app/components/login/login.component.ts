import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstAplicacion } from 'src/app/shared/constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ConstAplicacion.EMPTY;
  password: string = ConstAplicacion.EMPTY;
  acceso: boolean = false;

  constructor(private _snackBar: MatSnackBar,
    private _route: Router) { }

  /*
    Método que evalua las credenciales del usuario y genera un snackbar informativo.
    Al ingresar las credenciales correctas ingresa al modulo principal
  */
  openSnackBar() {
    if (ConstAplicacion.USER == this.username && ConstAplicacion.PASSWORD == this.password) {
      sessionStorage.setItem('user', this.username);
      this.generarSnackBar(ConstAplicacion.SUCCESS_LOGIN, '', 'mat-primary');
      this.acceso = true;
      this.gotoHome();
    } else {
      this.generarSnackBar(ConstAplicacion.ERROR_LOGIN, '', 'mat-warn');
    }
  }

  /*
    Método que genera el Snackbar informativo de sesión
  */
  generarSnackBar(descripcion: string, mensaje: string, className: string) {
    this._snackBar.open(descripcion, mensaje, {
      duration: ConstAplicacion.TIME_SNACKBAR,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', className]
    });
  }

  /*
    Redirección al componente principal (Home)
  */
  gotoHome(): void {
    this._route.navigate(['/home']);
  }

  ngOnInit(): void {
    // Al recargar el formulario borra la variable de sesión de usuario.
    sessionStorage.removeItem(ConstAplicacion.VAR_USER_SESSION_STORAGE);
  }

}
