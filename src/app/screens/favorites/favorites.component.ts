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
  favCharacters = new Set();
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
    })
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
