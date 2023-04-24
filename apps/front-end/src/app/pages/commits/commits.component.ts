import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommitsService } from '../../services/commits.service';
import { IListCommitItem } from "../../../../../../interfaces/IListCommitItem";
@Component({
  selector: 'git-commit-reader-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit, AfterContentChecked {
  commits: IListCommitItem[] = [];

  constructor(
    private commitsService: CommitsService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
    this.listCommits();
  }

  listCommits() {
    this.commitsService.listCommits().subscribe(res => {
      this.commits = res;
    })
  }
}
