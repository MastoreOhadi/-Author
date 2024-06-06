import {Component, ElementRef, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {AuthorMockDataService} from "../entities/author/author-mock-data.service";
import {BaseComponent} from "../shared/base/base.component";
import {Author, AuthorSortType} from "../entities/author/author.model";
import {AppInjector} from "../app-injector.service";
import {Article} from '../entities/article/article.model';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss'],
   
    
})
export class AuthorsComponent extends BaseComponent<Author> implements OnInit {

    authorSortType: AuthorSortType = AuthorSortType.Name;
    @Input() articles: Article[] = [];
    @ViewChild('myinput ') myinput?: ElementRef
    @ViewChild('myselect ') myselect?: ElementRef


    public AuthorSortType = AuthorSortType;
    override apiService: AuthorMockDataService
    showForm: any;

    constructor(override injector: Injector) {
        super(injector);
        // const injector = AppInjector.getInjector();
        this.apiService = injector.get(AuthorMockDataService);
        this.setLoadMore(true);

    }

    ngOnInit() {
        this.loadData();
    }

    btnForm() {
        this.showForm = !this.showForm;

        let tmpsearch = this.myinput!.nativeElement.value;
        let tmpsort = this.myselect!.nativeElement.value;


        if (this.searchText != tmpsearch) {
            if (this.sort != tmpsort) {
                this.sort = tmpsort;
                this.searchText = tmpsearch;
                this.items = [];
                this.currentPage = 1;
                this.loadData();
            }

        }


    }

    onAddAuthor() {


    }
}
