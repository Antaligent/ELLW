import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private httpClient: HttpClient) { }

  async login(email: string, content: string) {
    const user = {
      email: email,
      content: content
    };
    const url = 'http://localhost:3000/issue/post';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(url, user, { headers }).toPromise();
  }

}
