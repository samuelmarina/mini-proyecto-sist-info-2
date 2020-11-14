import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtonsComponent implements OnInit {
  @Input('prev') prev: boolean;
  @Input('next') next: boolean;
  @Input('page') page: number;
  @Input('changePage') changePage: Function;
  @Input('params') params: Function;
  @Input('nextPage') nextPage: Function;
  @Input('prevPage') prevPage: Function;

  constructor() { }

  ngOnInit(): void {
  }

  nextPageClicked() {
    this.nextPage();
  }

  prevPageClicked() {
    this.prevPage();
  }

}
