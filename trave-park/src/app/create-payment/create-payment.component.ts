import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PaymentService } from '../Payment.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-payment',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {
  paymentForm: FormGroup;
  users: any[] = [];

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private userService: UserService
  ) {
    this.paymentForm = this.fb.group({
      userId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      date: ['', Validators.required],
      isPaid: [false, Validators.required],
      month: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );
  }
  onSubmit(): void {
    if (this.paymentForm.valid) {
      const formData = this.paymentForm.value;
      this.paymentService.addPayment(formData).subscribe(
        response => {
          this.paymentForm.reset();
        },
        error => {
          console.error('Error al crear el pago:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }


}
