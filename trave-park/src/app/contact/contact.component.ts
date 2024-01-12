import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userEmail: string = ''; // Variable para el email
  userContent: string = ''; // Variable para el contenido del mensaje

  constructor(private httpClient: HttpClient) {}

  enviarCorreu() {
    const user = {
      email: this.userEmail,
      content: this.userContent
    };

    const url = 'http://localhost:3000/issue/post'; // URL de tu servidor
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.post(url, user, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
        // Aquí puedes agregar acciones después de enviar el correo, como mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error(error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
      });
  }
}
