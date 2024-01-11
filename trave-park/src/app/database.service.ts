import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string) {
    const response = await this.httpClient.get(`http://localhost:3000/users/${email}`).toPromise();
    return response;
  }

}
