import { Component, ViewChild } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConstAplicacion } from 'src/app/shared/constantes';
import { CommentsClass } from '../../interface/comments.class.model';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { ViweDetailComponent } from '../viwe-detail/viwe-detail.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'edit'];
  dataList: CommentsClass[] = [];
  id: string = ConstAplicacion.EMPTY
  title: string = ConstAplicacion.EMPTY
  dataSource = new MatTableDataSource<CommentsClass>();
  loading: boolean;
  isPopupOpened: boolean;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _httpService: JsonplaceholderService,
              private dialog: MatDialog,
              private activatedRoute: ActivatedRoute) {

      this.loading = true;
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        this.title = params['title']
        this.getAllCommentsByPosts(params['id']);
      })
  }

  /*
  Inicializa el datasource posterior a la ejecución del método OnInit
  */
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1500);

  }

  /*
    Realiza el filtrado por cualquier valor de la tabla
  */
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  /*
    Servicio que trae todos los comentarios por post
  */
  getAllCommentsByPosts = (id: string) => {
    const URL = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    this._httpService.get(URL).subscribe((data: any) => {
      this.dataList = data;
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.data = data as CommentsClass[];
      this.loading = false;
    });
  }

  verDetalle(comentario: CommentsClass) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ViweDetailComponent, {
      width: '600px',
      data: comentario
    });
  }

}
