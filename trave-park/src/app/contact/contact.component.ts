import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private httpClient: HttpClient) {}

  enviarCorreu() {
    const email = 'correo@example.com'; // Reemplaza con el valor real del campo de correo electrónico
    const content = 'Contenido del mensaje'; // Reemplaza con el valor real del campo de contenido

    const user = {
      email: email,
      content: content
    };

    const url = 'http://localhost:3000/issue/post'; // URL de tu servidor
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post(url, user, { headers })
      .toPromise()
      .then(response => {
        // Manejar la respuesta aquí
        console.log(response);
      })
      .catch(error => {
        // Manejar el error aquí
        console.error(error);
      });
  }
}
