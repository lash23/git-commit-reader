import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GIT_API_CONFIG } from '../../../utils/gitApiConfig';
import { IListCommitItem } from '../../../../../../interfaces/IListCommitItem'

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpService) {}

  getCommits(): Promise<IListCommitItem[]> {
    const { url } = GIT_API_CONFIG;

    return lastValueFrom(
      this.httpService
        .get(`${url}/commits`)
        .pipe(map((response: AxiosResponse) => response.data as IListCommitItem[]))
    );
  }
}
