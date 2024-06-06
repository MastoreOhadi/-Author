import {
    Directive, EventEmitter, Input, Output, NgModule, CUSTOM_ELEMENTS_SCHEMA
    , Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren
} from '@angular/core';


import {Observable, of} from 'rxjs';
import {MockApiService} from '../mock-api.service'
import {NgbdSortableHeader, SortEvent} from '../sortable.directive';
import {FormsModule} from '@angular/forms';
import {NgbHighlight, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AsyncPipe, CommonModule, DecimalPipe} from "@angular/common";
import {DisplayMember} from "../../entities/display-member";

@Component({
    selector: 'app-bd-table',
    standalone: true,
    imports: [DecimalPipe, FormsModule, AsyncPipe, NgbHighlight, NgbdSortableHeader, NgbPaginationModule,CommonModule],
    templateUrl: './bd-table.component.html',
    styleUrl: './bd-table.component.scss',
    providers: [MockApiService, DecimalPipe],

})
export class BdTableComponent<T> implements OnInit, OnChanges {

    @Input() items:T[]=[]
    @Input() displayMembers: DisplayMember[]=[];

    constructor(public service: MockApiService<T>) {}

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit(): void {
    }
}