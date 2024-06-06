import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorApiServiceService {
  constructor(private http: HttpClient) {}

  fetchData(page: number): Observable<any[]> {
    return this.http.get<any[]>(`/api/data?page=${page}`);
  }

}

