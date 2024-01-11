import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Importa Router
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
  router = inject(Router); // Inyecta Router utilizando la función inject

  constructor() {
    this.formulario = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
  }

  async onSubmit() {
    try {
      const data = await this.dataBaseService.login(this.formulario.value.email); // Asegúrate de pasar la contraseña también

      if (data) {
        // Si se devuelve un usuario, navega a la parte privada
        this.router.navigate(['/private']);
      } else {
        // Manejo de credenciales incorrectas
      }
    } catch (error) {
      // Manejo de errores de la solicitud
      console.error('Error durante el proceso de login:', error);
    }
  }
}
