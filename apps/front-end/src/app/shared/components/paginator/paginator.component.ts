import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IPaginationButton {
  page: number;
}

@Component({
  selector: 'git-commit-reader-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() entryItems: any[] = [];
  @Output() emitItems = new EventEmitter<any[]>();

  totalPages = 0;
  breakPage = 5;
  paginatorButtons: IPaginationButton[] = [];
  currentPage = 1;

  itemsToShow: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setPaginator();
    this.setCommitList();
  }

  setPaginator() {
    this.totalPages = Math.ceil(this.entryItems.length / this.breakPage);
    this.paginatorButtons = new Array(this.totalPages)
      .fill(0)
      .map( (_p, i) => ({ page: i + 1 }));
  }

  setCommitList() {
    const start = 0 + (this.breakPage * (this.currentPage - 1));
    const end = start + this.breakPage;

    this.itemsToShow = this.entryItems.slice(start, end);

    this.setItems();
  }

  nextPage() {
    if (this.currentPage === this.paginatorButtons.length) {
      return;
    }

    this.currentPage++;
    this.setCommitList();
  }

  previousPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.setCommitList();
  }

  setPage(page: number) {
    this.currentPage = page;
    this.setCommitList();
  }

  setItems() {
    this.emitItems.emit(this.itemsToShow);
  }
}
