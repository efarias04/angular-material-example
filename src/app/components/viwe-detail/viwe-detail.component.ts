import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentsClass } from 'src/app/interface/comments.class.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConstAplicacion } from 'src/app/shared/constantes';

@Component({
  selector: 'app-viwe-detail',
  templateUrl: './viwe-detail.component.html',
  styleUrls: ['./viwe-detail.component.css']
})
export class ViweDetailComponent implements OnInit {

  detalle: CommentsClass;

  constructor(private dialogref: MatDialogRef<ViweDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CommentsClass,
              private _snackBar: MatSnackBar) {

    this.detalle = this.data;
  }

  ngOnInit(): void {
  }

  /*
    Cierra la ventana modal.
  */
 closeDialog() {
  this.dialogref.close();
}

}
