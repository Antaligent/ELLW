import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Character } from '../model/character';
import { UserFavouriteCharactersService } from '../user-favourite-characters.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
[x: string]: any;

  public userFavouriteCharactersService: UserFavouriteCharactersService = inject(UserFavouriteCharactersService);

  @Input() character!: Character;
  removeFavouriteCharacter(character: Character) {
    this.userFavouriteCharactersService.deleteCharacterFromFavourites(character);
    console.log(this.userFavouriteCharactersService.getCurrentFavouriteCharacters());
  }

  addFavouriteCharacter(character: Character) {
    this.userFavouriteCharactersService.addCharacterToFavourites(character);
    console.log(this.userFavouriteCharactersService.getCurrentFavouriteCharacters());
  }

}
