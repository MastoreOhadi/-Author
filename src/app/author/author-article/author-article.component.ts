import {Component, Injector, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {BaseComponent} from "../../shared/base/base.component";
import {Article, ArticleType, DISPLAY_MEMBERS} from "../../entities/article/article.model";
import {ArticleMockDataService} from "../../entities/article/article-mock-data.service";
import {BdTableComponent} from "../../shared/bd-table/bd-table.component";
import {of} from "rxjs";
import {DisplayMember} from "../../entities/display-member";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-author-article',
    templateUrl: './author-article.component.html',
    styleUrl: './author-article.component.scss'
})
export class AuthorArticleComponent extends BaseComponent<Article> implements OnInit, OnChanges {

    @ViewChild("dyntab") dyntab: BdTableComponent<Article>;
    @Input() authorId: number = 0;
    override apiService: ArticleMockDataService
    public displayMembers: DisplayMember[] = DISPLAY_MEMBERS;
    boundaryLinks=false;

    constructor(override injector: Injector) {
        super(injector);
        this.pageSize = 3;
        this.apiService = injector.get(ArticleMockDataService);
        this.dyntab = new BdTableComponent<Article>(this.apiService);

        this.setLoadMore(false);

    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
        this.apiService.setAuthorId(this.authorId);
        this.loadData();
    }
override  afterLoadData() {
    super.afterLoadData();
    this.boundaryLinks=(this.total/this.pageSize >2);//for show more 2 page
}

    paginationChangePage(page: number) {
        if (this.currentPage != page) {
            this.apiService.setAuthorId(this.authorId);//service share and id before load must set
            this.currentPage = page;
            this.loadData();
        }
    }
}
