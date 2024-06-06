import {Component, OnInit, OnDestroy, Injector} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ApiService} from "../api.service";
import {AppInjector} from "../../app-injector.service";
import {MockApiService} from "../mock-api.service";
import {FormGroup, FormsModule, FormBuilder, FormControl} from '@angular/forms';
import {SearchResult} from "../../entities/SearchResult";

@Component({
    selector: 'app-base',
    standalone: true,
    imports: [FormsModule],
    template: ''
})
export class BaseComponent<T> {
    public items: T[] = [];
    currentPage = 1;
    pageSize: number = 5;
    hasMoreItems = true;
    searchText: string = '';
    sort: string = 'name';
    total: number = 0;
    loadMore: boolean = true;
    public apiService: ApiService<T>;
    protected unsubscribe = new Subject();

    public setCurrentPage(currentPage: number) {this.currentPage = currentPage;}
    public setPageSize(pageSize: number) {this.pageSize = pageSize;}
    public setHasMoreItems(hasMoreItems: boolean) {this.hasMoreItems = hasMoreItems;}
    public setLoadMore(loadMore: boolean) {this.loadMore = loadMore;}
    public setSearchText(searchText: string) {this.searchText = searchText;}
    public setSort(sort: string) {this.sort = sort;}

    constructor(public injector: Injector) {
        this.apiService = injector.get(MockApiService); //todo form mock and backend
    }

    loadData() {
        this.apiService
            .fetchData(this.currentPage, this.pageSize, this.searchText, this.sort)
            .subscribe(searchResult => {
                this.process(searchResult);
                this.afterLoadData();
            });
    }
    // this method do some processing and set the data
    process(searchResult:SearchResult<T>): void {this.setData(searchResult); }

    setData(searchResult:SearchResult<T>) {
        if (this.loadMore == true) {
            this.items = [...this.items, ...(searchResult.items)];
            this.currentPage++;
        } else {
            this.items = [...(searchResult.items)];
        }
        this.hasMoreItems = searchResult.hasMoreItems;
        this.total = searchResult.total;
    }

    public afterLoadData() {}//for overload in children

    public inputChange($event: Event) {
        let temp: string = (<HTMLInputElement>$event.target).value;
        if (this.searchText != temp) {
            this.searchText = temp;
            this.items = [];
            this.currentPage = 1;
            this.loadData();
        }
    }

    public SelectType($event: Event) {
        let temp: string = (<HTMLSelectElement>$event.target).value;
        if (this.sort != temp) {
            this.sort = temp;
            this.items = [];
            this.currentPage = 1;
            this.loadData();
        }
    }

    ngOnDestroy(): void {
        this.unsubscribe.next(null);
        this.unsubscribe.complete();
    }

}


