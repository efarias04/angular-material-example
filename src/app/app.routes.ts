import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { EditComponent } from './components/edit/edit.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'edit', component: EditComponent },
  { path: 'comments/:id/:title', component: CommentsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
