// app-routing.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule // Importar HttpClientModule aquí
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
