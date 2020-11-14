import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/schemas/character';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentCharacters: Character[];
  currentPage: number;

  constructor(private charService: CharacterService) { 
    this.currentPage = 1;
    this.setCharacters();
  }

  ngOnInit(): void {
  }

  setCharacters() {
    this.charService.getCharactersByPage(this.currentPage).subscribe(res => {
      this.currentCharacters = res['results'] as Character[];
    })
  }
}
