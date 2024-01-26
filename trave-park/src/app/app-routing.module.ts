// app-routing.module.ts
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule ,// Importar HttpClientModule aquí
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
