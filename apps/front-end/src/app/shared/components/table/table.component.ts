import { Component, Input, OnInit } from '@angular/core';
import { IListCommitItem } from '../../../../../../../interfaces/IListCommitItem';
@Component({
  selector: 'git-commit-reader-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() commits: IListCommitItem[] = [];
  listedCommits: IListCommitItem[] = [];

  constructor() {
  }
  ngOnInit(): void {}

  setCommitList(commits: IListCommitItem[]) {
    this.listedCommits = [...commits];
  }
}
