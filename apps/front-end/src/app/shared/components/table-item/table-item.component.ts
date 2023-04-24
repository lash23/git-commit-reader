import { Component, Input, OnInit } from '@angular/core';
import { IListCommitItem } from '../../../../../../../interfaces/IListCommitItem';

@Component({
  selector: 'git-commit-reader-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent implements OnInit {

  @Input() commit: IListCommitItem | undefined;
  avatar: string | undefined;
  committerPage: string | undefined;
  author: string | undefined;
  message: string | undefined;
  date: string | undefined;
  sha: string | undefined;
  commitUrl: string | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setCommitDetails();
  }

  setCommitDetails() {
    this.avatar = this.commit?.committer.avatar_url;
    this.committerPage = this.commit?.committer.html_url;
    this.author = this.commit?.committer.login;
    this.message = this.commit?.commit.message;
    this.date = this.commit?.commit.committer.date;
    this.sha = this.commit?.sha;
    this.commitUrl = this.parseCommitUrl(this.commit?.html_url!, this.sha!)
  }

  parseCommitUrl(htmlmUrl: string, sha: string): string {
    const breakPoint = htmlmUrl.indexOf('commit/');
    const subString = htmlmUrl.slice(0, breakPoint);
    const url = `${subString}commit/${sha}`;

    return url;
  }
}
