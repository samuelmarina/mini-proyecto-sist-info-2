import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/schemas/character';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CharacterService } from 'src/app/services/character/character.service';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  characters: Character[];
  user;
  favCharacters: any[];
  currentCharacters;
  currentPage = 1;
  params;
  isLoggedIn: boolean;

  constructor(
    private favService: FavoritesService,
    private auth: AuthService,
    private charService: CharacterService,
  ) {
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
          this.favCharacters = res;
          // console.log(this.favCharacters);
          this.setCharacters();
        });
      }
    })
   }

  ngOnInit(): void {
  }

  setCharacters() {
    this.currentCharacters = [];
    this.favCharacters.forEach(x => {
      this.charService.getCharacterById(x).subscribe(k => {
        let aux = k as Character;
        aux.haveLike = true;
        this.currentCharacters.push(k);
      });
    })
  }

}
