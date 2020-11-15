import { Component, Input, OnInit } from '@angular/core';
import firebase from "firebase/app"

import { Character } from 'src/app/schemas/character';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input('character') character: Character;
  @Input('showActions') showActions;
  @Input('user') user: firebase.User;
  likes: number;
  
  constructor(private favService: FavoritesService) { 
    this.getLikes();
  }

  ngOnInit(): void {
  }

  clickLike() {

    this.character.haveLike ? 
      this.favService.dislike(this.user, this.character.id) :
      this.favService.like(this.user, this.character.id);

  }

  getLikes() {
    this.likes = 0;
  }

}
