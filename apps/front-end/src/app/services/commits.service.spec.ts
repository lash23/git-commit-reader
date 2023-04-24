import { TestBed } from '@angular/core/testing';

import { CommitsService } from './commits.service';
import { HttpClient } from '@angular/common/http';
import { IListCommitItem } from '../../../../../interfaces/IListCommitItem';
import { of } from 'rxjs';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

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

const getCommitResponseMock = {
  data: [commitListItemMock]
}

describe('CommitsService', () => {
  let service: CommitsService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useClass: HttpClientMock
        },
      ]
    });

    service = TestBed.inject(CommitsService);
    httpClientMock = TestBed.inject(HttpClient as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('listCommits()', () => {
    beforeEach(() => {
      httpClientMock.get.and.returnValue(of(getCommitResponseMock));
    })
    it('should call httpClient.get() method', () => {
      service.listCommits().subscribe((_response) => {
        expect(httpClientMock.get).toHaveBeenCalled();
      })
    })

    it('response should be an Array of IListCommitItem', () => {
      service.listCommits().subscribe((response) => {
        expect(response).toBeInstanceOf(Array<IListCommitItem>);
      })
    })
  })
});
