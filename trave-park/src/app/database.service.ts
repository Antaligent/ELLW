import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, password: string) {
    const response = await this.httpClient.post<any>(`http://localhost:3000/users/login`, { email, password }).toPromise();
    if (response && response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userRole', response.role);
    }
    return response;
  }


}
