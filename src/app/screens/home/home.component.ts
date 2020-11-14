import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  character;

  constructor(private charService: CharacterService) { 
    this.charService.getCharacterById(1).subscribe(x => this.character = x);
  }

  ngOnInit(): void {
  }

}
