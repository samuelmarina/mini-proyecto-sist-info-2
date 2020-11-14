import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/schemas/character';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentCharacters: Character[];
  currentPage: number;
  isLoggedIn: boolean;
  setCharactersCallback: Function;
  searchCharacterCallback: Function;

  constructor(
    private charService: CharacterService,
    private auth: AuthService) { 
    this.currentPage = 1;
    this.setCharacters(1);
    this.setCharactersCallback = this.setCharacters.bind(this);
    this.searchCharacterCallback = this.searchCharacter.bind(this);

    auth.user$.subscribe(user => {
      this.isLoggedIn = user ? true : false;
    })
  }

  ngOnInit(): void {
  }

  setCharacters(page) {
    this.charService.getCharactersByPage(page).subscribe(res => {
      this.currentCharacters = res['results'] as Character[];
    })
  }

  searchCharacter(name) {
    this.charService.getCharacterByName(name).subscribe(res => {
      this.currentCharacters = res['results'] as Character[];
    })
  }
}
