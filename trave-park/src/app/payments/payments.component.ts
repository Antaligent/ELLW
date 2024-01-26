import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Payment } from '../Entities/payment.models';
import { PaymentService } from '../Payment.service';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  months = ['Gener', 'Febrer', 'Març','Abril','Maig','Juny','Juliol','Agost','Septembre','Octubre','Novembre','Desembre'];
  selectedPayments: Payment[] = [];
  currentYear = new Date().getFullYear(); // Obtiene el año actual

  constructor(private paymentService: PaymentService) {

  }

  ngOnInit(): void {
  }

  loadPayments(monthName: string): void {

    const monthNumber = this.months.indexOf(monthName) + 1; // Convierte el nombre del mes a número
    if (monthNumber > 0) {
      this.paymentService.getPaymentsByMonth( monthNumber).subscribe(
        data => {
          this.selectedPayments = data;
        },
        error => {
          console.error('Error fetching data: ', error);
        }
      );
    } else {
      console.error('Mes no válido');
    }
  }

}
