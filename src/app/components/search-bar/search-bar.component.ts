import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input('searchCharacter') searchCharacter: Function;

  constructor() { }

  ngOnInit(): void {
  }

  search(form) {
    this.searchCharacter(form.name);
  }

}
