import { Component, OnInit } from '@angular/core';
import { CommitsService } from '../../services/commits.service';
import { IListCommitItem } from "../../../../../../interfaces/IListCommitItem";
@Component({
  selector: 'git-commit-reader-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  commits: IListCommitItem[] = [];

  constructor(
    private commitsService: CommitsService
  ) {}

  ngOnInit(): void {
    this.listCommits();
  }

  listCommits() {
    this.commitsService.listCommits().subscribe(res => {
      this.commits = res;
    })
  }
}
