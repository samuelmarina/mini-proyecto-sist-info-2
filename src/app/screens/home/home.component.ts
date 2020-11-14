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
  params;
  setCharactersCallback: Function;
  searchCharacterCallback: Function;
  nextPageCallback: Function;
  prevPageCallback: Function;
  filterCharactersCallback: Function;

  constructor(
    private charService: CharacterService,
    private auth: AuthService) { 
    this.currentPage = 1;
    this.setCharactersCallback = this.setCharacters.bind(this);
    this.searchCharacterCallback = this.searchCharacter.bind(this);
    this.nextPageCallback = this.nextPage.bind(this);
    this.prevPageCallback = this.prevPage.bind(this);
    this.filterCharactersCallback = this.filterCharacters.bind(this);


    this.params = {
      page: this.currentPage,
      name: "",
      status: "",
      species: "",
      type: "",
      gender: ""
    }

    this.setCharacters(this.params);

    auth.user$.subscribe(user => {
      this.isLoggedIn = user ? true : false;
    })
  }

  ngOnInit(): void {
  }

  setCharacters(params) {
    this.charService.getCharacters(params).subscribe(res => {
      this.currentCharacters = res['results'] as Character[];
    })
  }

  searchCharacter(name) {
    this.currentPage = 1;
    this.params.name = name;
    this.params.page = this.currentPage;
    this.setCharacters(this.params);
  }

  filterCharacters(status, gender, type, species){
    this.currentPage = 1;
    this.params.page = this.currentPage;
    this.params['status'] = status;
    this.params.gender = gender;
    this.params['type'] = type;
    this.params['species'] = species;
    this.setCharacters(this.params);
  }

  nextPage() {
    this.currentPage += 1;
    this.params.page = this.currentPage;
    this.setCharacters(this.params);
  }

  prevPage() {
    this.currentPage -= 1;
    this.params.page = this.currentPage;
    this.setCharacters(this.params);
  }
}
