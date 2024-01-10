import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private httpClient = inject(HttpClient);
  constructor() { }

  async login(email: string, password: string) {
    const data = await this.httpClient.post('http://localhost:3000/users/', { email }).toPromise();
    return data;
  }
}
