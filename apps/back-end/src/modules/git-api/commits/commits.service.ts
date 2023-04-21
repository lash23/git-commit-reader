import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { GIT_API_CONFIG } from '../../../utils/gitApiConfig';

@Injectable()
export class CommitsService {
  constructor(private readonly httpService: HttpService) {}

  getCommits() {
    const { url } = GIT_API_CONFIG;

    return lastValueFrom(
      this.httpService
        .get(`${url}/commits`)
        .pipe(map((response: AxiosResponse) => response.data))
    );
  }
}
