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

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    // if(!this.next) return;
    this.page += 1;
    this.params['page'] = this.page;
    this.changePage(this.params);
  }

  prevPage() {
    // if(!this.prev) return;
    this.page -= 1;
    this.params['page'] = this.page;
    this.changePage(this.params);
  }

}
