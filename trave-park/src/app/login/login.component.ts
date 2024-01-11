import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formulario: FormGroup;
  dataBaseService = inject(DatabaseService);
  constructor() {
    this.formulario = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
  }

  async onSubmit() {
   const data = await this.dataBaseService.login(this.formulario.value.email, this.formulario.value.password);
   console.log(data);
  }
}
