import { Component, Input } from '@angular/core';

@Component({
  selector: 'git-commit-reader-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() title: string | undefined;

  constructor() {}
}
