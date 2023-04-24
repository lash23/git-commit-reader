import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemComponent } from './table-item.component';
import { IListCommitItem } from '../../../../../../../interfaces/IListCommitItem';

const commitListItemMock: IListCommitItem = {
  comments_url: '',
  url: '',
  sha: '35f64225d7b8b09810beb61940684f21323bb864',
  node_id: '',
  html_url: 'https://github.com/lash23/git-commit-reader/commit/35f64225d7b8b09810beb61940684f21323bb864',
  committer: {
    date: '',
    email: '',
    name: '',
    html_url: 'html_url',
    login: 'login',
  },
  commit: {
    author: {
      date: '',
      email: '',
      name: '',
    },
    comment_count: 0,
    message: 'message',
    url: '',
    committer: {
      date: '01/01/2023',
      email: '',
      name: '',
      avatar_url: 'avatar_url'
    }
  }
}

describe('TableItemComponent', () => {
  let component: TableItemComponent;
  let fixture: ComponentFixture<TableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableItemComponent);
    component = fixture.componentInstance;
    component.commit = commitListItemMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInit()', () => {
    it('should call component.setCommitDetails()', () => {
      let spyListCommits = spyOn(component, 'setCommitDetails');

      component.ngOnInit();
      expect(spyListCommits).toHaveBeenCalled();
    });
  })

  describe('setCommitDetails()', () => {
    it('should call component.parseCommitUrl()', () => {
      let spyListCommits = spyOn(component, 'parseCommitUrl');

      component.setCommitDetails();
      expect(spyListCommits).toHaveBeenCalled();
    });

    it('should fill component.avatar', () => {
      component.setCommitDetails();
      expect(component.avatar).toEqual(component.commit?.committer.avatar_url);
    });

    it('should fill component.committerPage', () => {
      component.setCommitDetails();
      expect(component.committerPage).toEqual(component.commit?.committer.html_url);
    });

    it('should fill component.author', () => {
      component.setCommitDetails();
      expect(component.author).toEqual(component.commit?.committer.login);
    });

    it('should fill component.message', () => {
      component.setCommitDetails();
      expect(component.message).toEqual(component.commit?.commit.message);
    });

    it('should fill component.date', () => {
      component.setCommitDetails();
      expect(component.date).toEqual(component.commit?.commit.committer.date);
    });

    it('should fill component.sha', () => {
      component.setCommitDetails();
      expect(component.sha).toEqual(component.commit?.sha);
    });

    it('should fill component.commitUrl', () => {
      const commitUrl = 'fixed/url';
      spyOn(component, 'parseCommitUrl').and.returnValue(commitUrl);

      component.setCommitDetails();
      expect(component.commitUrl).toEqual(commitUrl);
    });
  })

  describe('parseCommitUrl()', () => {
    it('should return a valid GitHub commit url by replacing the id in html_url property with the sha string', () => {
      const result = component.parseCommitUrl(commitListItemMock.html_url, commitListItemMock.sha);
      const expectedResult = `https://github.com/lash23/git-commit-reader/commit/${commitListItemMock.sha}`;

      expect(result).toEqual(expectedResult);
    })
  })
});
