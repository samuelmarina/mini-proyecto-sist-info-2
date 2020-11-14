import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/schemas/character';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input('character') character: Character;
  @Input('showActions') showActions;
  likes: number;
  
  constructor() { 
    this.getLikes();
  }

  ngOnInit(): void {
  }

  clickLike() {
    this.character.haveLike =  !this.character.haveLike
  }

  getLikes() {
    this.likes = 0;
  }

}
