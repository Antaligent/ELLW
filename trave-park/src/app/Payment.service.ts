import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './Entities/payment.models';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/payment';

  constructor(private http: HttpClient) {}

  getPaymentsByMonth(month: number): Observable<any> {
    const params = new HttpParams().set('month', month.toString());
    return this.http.get<Payment[]>(`${this.apiUrl}/month`, { params });
  }
  addPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }


}
