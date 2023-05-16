import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./user/authguard.service";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/book-search/book-search.module').then(m => m.BookSearchModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
