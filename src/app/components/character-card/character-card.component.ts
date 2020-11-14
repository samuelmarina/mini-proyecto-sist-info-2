import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  character = {
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
