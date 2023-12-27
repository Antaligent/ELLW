import { Component } from '@angular/core';

@Component({
  selector: 'app-instalacions',
  standalone: true,
  imports: [],
  templateUrl: './instalacions.component.html',
  styleUrl: './instalacions.component.css'
})
export class InstalacionsComponent {

  facilities = [
    {
      title: 'Vigilància 24/7',
      imageUrl: 'https://via.placeholder.com/400x300',
      description: 'Sistema de vigilància les 24 hores per garantir la seguretat dels vehicles i objectes emmagatzemats.'
    },
    {
      title: 'Accés Controlat amb Targeta',
      imageUrl: 'https://via.placeholder.com/400x300',
      description: 'Accés segur i controlat mitjançant targeta d\'accés per als nostres clients autoritzats.'
    },
    {
      title: 'Àrees d\'Emmagatzematge Cobertes',
      imageUrl: 'https://via.placeholder.com/400x300',
      description: 'Àrees d\'emmagatzematge cobertes per protegir els vehicles i objectes de les inclemències meteorològiques.'
    },
    {
      title: 'Connexió Elèctrica Disponible',
      imageUrl: 'https://via.placeholder.com/400x300',
      description: 'Instal·lacions amb connexió elèctrica per a carregues i altres necessitats elèctriques dels vehicles.'
    }
  ];
}
