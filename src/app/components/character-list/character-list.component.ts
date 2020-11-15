import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/schemas/character';

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input('characters') characters: Character[];
  @Input('showActions') showActions: boolean;
  @Input('user') user;

  constructor() { }

  ngOnInit(): void {
  }

}
