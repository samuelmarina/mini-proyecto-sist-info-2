import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/schemas/character';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CharacterService } from 'src/app/services/character/character.service';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user;
  currentCharacters: Character[] = [];
  favCharacters = new Set();
  currentPage: number;
  isLoggedIn: boolean;
  params;
  setCharactersCallback: Function;
  searchCharacterCallback: Function;
  nextPageCallback: Function;
  prevPageCallback: Function;
  filterCharactersCallback: Function;

  constructor(
    private favService: FavoritesService,
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

    auth.user$.subscribe(user => {
      this.isLoggedIn = user ? true : false;

      if(user){
        this.user = user;
        this.favService.getAll(user).valueChanges().subscribe(res => {
          res.forEach(item => {
            this.favCharacters.add(item);
          })
          this.setCharacters(this.params);
        });
      }
    })

  }

  ngOnInit(): void {
  }

  setCharacters(params) {
    this.currentCharacters = [];
    this.charService.getCharacters(params).pipe(take(1)).subscribe(res => {
      res['results'].forEach(obj => {
        let aux = obj as Character;
        if(this.favCharacters.has(obj.id)){
          aux.haveLike = true;
        }
        else{
          aux.haveLike = false;
        }
        this.currentCharacters.push(aux);
      })
      // this.currentCharacters = res['results'] as Character[];
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
