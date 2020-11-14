import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/schemas/character';
import { CharacterService } from 'src/app/services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;
  id;

  constructor(
    private route: ActivatedRoute,
    private charService: CharacterService) { 
    this.id = this.route.snapshot.paramMap.get('id');

    this.charService.getCharacterById(this.id).subscribe(res => {
      this.character = res as Character;
      console.log(this.character);

    })
  }

  ngOnInit(): void {
  }

}
