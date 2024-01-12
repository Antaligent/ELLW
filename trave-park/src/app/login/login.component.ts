import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;
  dataBaseService = inject(DatabaseService);
  router = inject(Router);
  mostrarMensaje = false;

  constructor() {
    this.formulario = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
  }

  async onSubmit() {
    try {
      const data = await this.dataBaseService.login(this.formulario.value.email);

      if (data) {
        this.router.navigate(['/private']);
      } else {
        this.mostrarMensaje = true;
      }
    } catch (error) {
      console.error('Error durante el proceso de login:', error);

    }
  }
}
