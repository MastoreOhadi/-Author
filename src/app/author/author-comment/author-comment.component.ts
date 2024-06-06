import {Comment,DISPLAY_MEMBERS} from '../../entities/comment/comment.model';
import {BaseComponent} from "../../shared/base/base.component";
import {Component, Injector, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from "@angular/core";
import {CommentMockDataService} from "../../entities/comment/comment-mock-data.service";
import {BdTableComponent} from "../../shared/bd-table/bd-table.component";
import {DisplayMember} from "../../entities/display-member";

@Component({
    selector: 'app-author-comment',
    templateUrl: './author-comment.component.html',
    styleUrl: './author-comment.component.scss'
})
export class AuthorCommentComponent extends BaseComponent<Comment> implements OnInit, OnChanges {
    @Input() authorId: number = 0;
    @ViewChild("dyntab") dyntab: BdTableComponent<Comment>;

    override apiService: CommentMockDataService
    public displayMembers:DisplayMember[]=DISPLAY_MEMBERS;
    boundaryLinks=false;

    constructor(override injector: Injector) {
        super(injector);
        this.pageSize = 3;
        this.apiService = injector.get(CommentMockDataService);
        this.dyntab = new BdTableComponent<Comment>(this.apiService);
        this.setLoadMore(false);
    }

    ngOnInit(): void {
        this.apiService.setAuthorId(this.authorId);
        this.loadData();


    }
override  afterLoadData() {
    super.afterLoadData();
    this.boundaryLinks=(this.total/this.pageSize >2);//for show more 2 page
}

    ngOnChanges(changes: SimpleChanges): void {
    }
    paginationChangePage(page: number) {
        if (this.currentPage != page) {
            this.apiService.setAuthorId(this.authorId);//service share and id before load must set
            this.currentPage = page;
            this.loadData();
        }
    }
}
