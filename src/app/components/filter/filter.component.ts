import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input('filterCharacters') filterCharacters: any;
  status = "";
  gender = "";
  type = "";
  species = "";

  constructor() { }

  ngOnInit(): void {
  }

  filter() {
    this.filterCharacters(this.status, this.gender, this.type, this.species);
  }

  statusChangeHandler(event: any){
    this.status = event.target.value;
  }

  genderChangeHandler(event: any) {
    this.gender = event.target.value;
  }

  typeChangeHandler(event: any) {
    this.type = event.target.value ? event.target.value : ""
  }

  speciesChangeHandler(event: any) {
    this.species = event.target.value ? event.target.value : ""
  }
}
