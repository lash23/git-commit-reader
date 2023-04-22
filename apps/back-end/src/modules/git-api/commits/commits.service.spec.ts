import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';
import { HttpModule, HttpService,  } from '@nestjs/axios';
import { IListCommitItem } from '../../../../../../interfaces/IListCommitItem';
import { of } from "rxjs";
import { AxiosResponse } from 'axios';

describe('CommitsService', () => {
  let service: CommitsService;
  let httpService: HttpService;

  const mockServiceResponse: IListCommitItem = {
    comments_url: 'url',
    commit: {
      author: {
        date: 'date',
        email: 'email',
        name: 'name'
      },
      comment_count: 5,
      committer: {
        date: 'date',
        email: 'email',
        name: 'name'
      },
      message: 'message',
      url: 'url'
    },
    sha: 'sha',
    node_id: 'node_id',
    url: 'url',
    html_url: 'html_url'
  }

  const mockAxiosresponse: AxiosResponse<any> = {
    data: [mockServiceResponse],
    status: 0,
    statusText: '',
    headers: undefined,
    config: undefined
  }

  const jestMockAxios = {
    get: jest.fn((url) => {
      return of(mockAxiosresponse);
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CommitsService,
        {
          provide: HttpService,
          useValue: jestMockAxios,
        },
      ],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCommits()', () => {
    beforeEach(() => {
      jest.spyOn(httpService, 'get').mockResolvedValue(mockAxiosresponse as never);
    })
    it('should return an array of IListCommitItem', async () => {
      const result = await service.getCommits();
      expect(result).toBeInstanceOf(Array<IListCommitItem>);
    });

    describe('IListCommitItem', () => {
      it('should have commit propperty', async () => {
        const result = await service.getCommits();
        expect(result[0]).toHaveProperty('commit');
      });
    })
  })
});
