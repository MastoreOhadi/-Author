import { Injectable } from '@angular/core';
import {Observable, Subscription,of} from "rxjs";
import {Author,AuthorSortType} from "./author.model";
import {MockApiService} from "../../shared/mock-api.service";
import {AUTHORS} from "./mock-author";
import {DecimalPipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AuthorMockDataService extends MockApiService<Author> {
    constructor(override pipe: DecimalPipe) {
        super(pipe);
       this.setData( AUTHORS);
   }

//     uploadImage(authorId: number, selectedFile: File) : Subscription<any> {
// return new Subscription<any>();
//     }
}
