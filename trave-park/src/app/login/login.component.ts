import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule], // Asegúrate de incluir ReactiveFormsModule aquí
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError: string = '';
  formulario: FormGroup;
  dataBaseService = inject(DatabaseService);
  router = inject(Router);
  mostrarMensaje = false;

  constructor() {
    this.formulario = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    if (this.formulario.valid) {
      try {
        const response = await this.dataBaseService.login(this.formulario.value.email, this.formulario.value.password);
        if (response && response.token) {
          const userRole = localStorage.getItem('userRole');
          if (userRole === 'ADMIN') {
            this.router.navigate(['/admin']);
            localStorage.setItem('userRole', response.role);

          } else {
            this.router.navigate(['/private']);
          }
        } else {
          this.mostrarMensaje = true;
        }
      } catch (error) {
        console.error('Error durante el proceso de login:', error);
        this.mostrarMensaje = true;
      }
    }
  }


}
