import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      parcela: ['', Validators.required],
      dni: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(
        response => {
          console.log('Usuario creado con éxito:', response);
          this.userForm.reset();
        },
        error => {
          console.error('Error al crear usuario:', error);

        }
      );
    } else {
      console.log('Formulario no es válido');
    }
  }
}
