import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentsClass } from 'src/app/interface/comments.class.model';

@Component({
  selector: 'app-viwe-detail',
  templateUrl: './viwe-detail.component.html',
  styleUrls: ['./viwe-detail.component.css']
})
export class ViweDetailComponent {

  detalle: CommentsClass;

  constructor(private dialogref: MatDialogRef<ViweDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: CommentsClass) {
    this.detalle = this.data;
  }

  /*
    Cierra la ventana modal.
  */
 closeDialog() {
  this.dialogref.close();
}

}
