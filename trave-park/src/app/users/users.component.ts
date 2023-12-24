import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import { CharacterSearchResult } from '../model/character';
import { SwapiService } from '../swapi-service.service';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CharacterComponent,RouterModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  public charactersSearchResult?: CharacterSearchResult;
  public swapiService: SwapiService = inject(SwapiService);

  constructor() {

  }

  async ngOnInit() {
    this.charactersSearchResult = await this.swapiService.getCharacters();
  }


}
