import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { IListCommitItem } from '../../../../../../../interfaces/IListCommitItem';

const commitListItemMock: IListCommitItem = {
  comments_url: '',
  url: '',
  sha: '',
  node_id: '',
  html_url: '',
  committer: {
    date: '',
    email: '',
    name: '',
  },
  commit: {
    author: {
      date: '',
      email: '',
      name: '',
    },
    comment_count: 0,
    message: '',
    url: '',
    committer: {
      date: '',
      email: '',
      name: '',
    }
  }
}

const listCommitResponseMock = [commitListItemMock];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('listedCommits', () => {
    it('should be equal to component.setCommitList(...) argument', () => {
      component.setCommitList(listCommitResponseMock);
      expect(component.listedCommits).toEqual(listCommitResponseMock);
    })
  })
});
