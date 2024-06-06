import {Injectable, PipeTransform} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortDirection} from './sortable.directive';

import {ApiService} from "./api.service";
import {SearchResult} from "../entities/SearchResult";


interface State {
    page: number;
    pageSize: number;
    searchTerm: string;
    sortColumn: string;
    sortDirection: SortDirection;
}


@Injectable({
    providedIn: 'root'
})
export class MockApiService<T> implements ApiService<T> {
    public direction = 'asc'
    public data: T[] = []

    constructor(public pipe: DecimalPipe) {}

    public setData(data: T[]) {
        this.data = data;
    }

    public whereData() {
        // return (item) => item['name']?.toLowerCase().includes(searchText.toLowerCase());
        return (item) => true;
    }

    public searche(searchText: string) {
        return (item) => item['name']?.toLowerCase().includes(searchText.toLowerCase());
        // const matches = this.matches;
        // return (items) => matches(items, searchText, this.pipe);
    }

    public fetchData(page: number, pageSize: number, searchText: string, sort: string): Observable<SearchResult<T>> {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const direct = (this.direction ==='asc') ? 1:-1;
        let searchResult: SearchResult<T>;
        const compareFn = (a:T, b:T) => {
            if (a[sort] < b[sort]) return -1*direct;
            if (a[sort] > b[sort]) return 1*direct;
            return 0;
        }

        // 1. where , filter and sort
        const totalFilterItems =
            this.data
                .filter(this.whereData())
                .filter(this.searche(searchText))
                .sort(compareFn);

        // 2. paginate
        let sliceItrems = totalFilterItems
            .slice(startIndex, endIndex);

        searchResult={ } as SearchResult<T>;
        searchResult.items = sliceItrems;
        searchResult.total = totalFilterItems.length;
        searchResult.hasMoreItems = (searchResult.total > pageSize * page);

        return of(searchResult);
    }

    //for full text search more fields
    public matches(item: T, term: string, pipe: PipeTransform) {
        return (
            item['name'].toLowerCase().includes(term.toLowerCase())
            // || pipe.transform(item['area]']).includes(term)
            // || pipe.transform(item.population).includes(term)
        );
    }

}
