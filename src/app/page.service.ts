// for Fetch the route data from an API or service
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private http: HttpClient) {}

  init() {
    return this.http.get('/api/routes').subscribe(
      (response) => {
        response.forEach((res) => {
          this.appRoute.push({
            path: res.alias,
            component: PageComponent
          });
        });
      },
      (errors) => {
        console.log(errors);
      }
    );
  }
}*/
