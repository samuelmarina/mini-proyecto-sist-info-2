import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/schemas/character';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CharacterService } from 'src/app/services/character/character.service';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;
  id;
  user;
  liked = false;
  favCharacters = new Set();

  constructor(
    private route: ActivatedRoute,
    private auth: AuthService,
    private favService: FavoritesService,
    private charService: CharacterService) { 
    this.id = this.route.snapshot.paramMap.get('id');

    this.charService.getCharacterById(this.id).subscribe(res => {
      this.character = res as Character;
      
      auth.user$.subscribe(user => {
      if(user){
        this.user = user;
        this.favService.getAll(user).valueChanges().subscribe(res => {
          res.forEach(item => {
            this.favCharacters.add(item);
          })

          if(this.favCharacters.has(this.character.id)){
            this.liked = true;
          }
        });
      }
    })

    })

    
  }

  handleClick() {
    this.liked ? 
      this.favService.dislike(this.user, this.character.id) :
      this.favService.like(this.user, this.character.id);

    this.liked = !this.liked;
  }

  ngOnInit(): void {
  }



}
