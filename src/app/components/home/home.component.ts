import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ConstAplicacion } from 'src/app/shared/constantes';
import { PostsClass } from 'src/app/interface/posts.class.model';
import { MatDialog} from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'title', 'body', 'edit'];
  dataList: PostsClass[] = [];
  dataSource = new MatTableDataSource<PostsClass>();
  loading: boolean;
  isPopupOpened: boolean;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private _httpService: JsonplaceholderService,
              private dialog: MatDialog,
              private router: Router) {
    this.loading = true;
  }

  /*
    Método del componente de su ciclo de vida, posterior a OnInit
  */
  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1500);

  }

  /*
    Método del componente de su ciclo de vida.
  */
  ngOnInit(): void {
    this.getAllPosts();
  }

  /*
    Método de filtrado de la tabla por cualquier elemento (Columna)
  */
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  /*
    Servicio de consulta posts
  */
  getAllPosts = () => {
    this._httpService.get(ConstAplicacion.URL_POSTS).subscribe((data: any) => {
      this.dataList = data;
      this.dataSource = new MatTableDataSource(this.dataList);
      this.dataSource.data = data as PostsClass[];
      this.loading = false;
    });
  }

  /*
    Abre el modal de edición de elementos y envía el objecto.
  */
  editarRegistro(element: PostsClass) {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(EditComponent, {
      width: '600px',
      data: element
    });
  }

  /*
    Se muestra el componente de
  */
  verComentarios(id: string, title: string) {
    this.router.navigate(['/comments', id, title]);
  }


}
