import { Injectable } from '@angular/core';
import { CharacterSearchResult } from './model/character';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor() { }

  async getCharacters(): Promise<CharacterSearchResult> {
    const response = await fetch('https://randomuser.me/api/?results=35');
    const charactersSearchResult: CharacterSearchResult = await response.json();
    return charactersSearchResult;
  }
}