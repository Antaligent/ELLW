import { Injectable } from '@angular/core';
import { Character } from './model/character';


@Injectable({
  providedIn: 'root'
})
export class UserFavouriteCharactersService {

  private favouriteCharacters: Character[] = [];

  constructor() { }

  addCharacterToFavourites(character: Character) {
    this.favouriteCharacters.push(character);
  }

  getCurrentFavouriteCharacters(): Character[] {
    return this.favouriteCharacters;
  }

  deleteCharacterFromFavourites(character: Character) {
    this.favouriteCharacters = this.favouriteCharacters.filter((favouriteCharacter) => favouriteCharacter.name !== character.name);
  }

  isCharacterFavourite(character: Character): boolean {
    return this.favouriteCharacters.some((favouriteCharacter) => favouriteCharacter.name === character.name);
  }

}
