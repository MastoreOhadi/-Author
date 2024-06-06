import {Injectable} from '@angular/core';
import {Observable, Subscription, of} from "rxjs";
import {MockApiService} from "../../shared/mock-api.service";
import {Article} from "./article.model";
import {ARTICLES} from "./mock-articles";
import {DecimalPipe} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class ArticleMockDataService extends MockApiService<Article> {
    authorId: number = 0;

    constructor(override pipe: DecimalPipe) {
        super(pipe);
        this.setData(ARTICLES);
    }


    public setAuthorId(authorId: number) {
        this.authorId = authorId;
    }

    override whereData() {
        return (item) => item.authorId == this.authorId;
    }
    override searche(searchText: string) {
        return (item) => true;
    }
}
