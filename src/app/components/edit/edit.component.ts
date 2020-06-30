import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsClass } from 'src/app/interface/posts.class.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstAplicacion } from 'src/app/shared/constantes';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  registro: PostsClass;
  titleForm: string;
  bodyForm: string;

  constructor(private dialogref: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PostsClass,
    private _snackBar: MatSnackBar,) {
    this.registro = this.data;
    this.titleForm = this.data.title;
    this.bodyForm = this.data.body;
  }

  /*
    Método que se ejecuta al iniciar el componente.
  */
  ngOnInit(): void {
    this.registro = this.data;
  }

  /*
    Guarda la modificación del registro.
  */
  guardarRegistro(titleForm: string, bodyForm: string) {
    if (this.titleForm === this.data.title && this.bodyForm === this.data.body) {
      this.generarSnackBar(ConstAplicacion.NOT_EDIT, '', 'mat-warn');
      this.closeDialog();
    } else {
      this.registro.title = titleForm;
      this.registro.body = bodyForm;
      this.generarSnackBar(ConstAplicacion.EDIT_SUCCESS, '', 'mat-primary');
      this.closeDialog();
    }
  }

  /*
    Cierra la ventana modal.
  */
  closeDialog() {
    this.dialogref.close();
  }

  /*
    Cancela la odificación, adicional muestra un snackBar informativo
  */
  cancelarEdicion() {
    this.generarSnackBar(ConstAplicacion.EDIT_ERROR, '', 'mat-warn');
    this.closeDialog();
  }

  /*
    Método que genera los SnackBar
  */
  generarSnackBar(descripcion: string, mensaje: string, className: string) {
    this._snackBar.open(descripcion, mensaje, {
      duration: ConstAplicacion.TIME_SNACKBAR,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', className]
    });
  }

}
