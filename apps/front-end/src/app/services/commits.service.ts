import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IListCommitItem } from '../../../../../interfaces/IListCommitItem';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  listCommits(): Observable<IListCommitItem[]> {
    return this.http.get(`${this.apiUrl}/commits`).pipe(
      map((res: any) => res.data as IListCommitItem[])
    );
  }
}
