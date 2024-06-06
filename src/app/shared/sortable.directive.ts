import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { BaseEntity } from './base.entity';
import {AuthorSortType} from "../entities/author/author.model";

export interface TableProps<T> { //;extends React.HTMLProps<HTMLTableElement> {
    tableData: T[];
    columnDefinitions: ColumnDefinition<T>[];
}

export type ColumnDefinition<T> = {
    title: string;
    dataIndex: keyof T;
    // render?: (currentData: T[keyof T], rowData?: T) => React.ReactNode;
};

// export type SortColumn = keyof  AuthorSortType  | ''   ;
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
    column: string;
    direction: SortDirection;
}

@Directive({
    selector: 'th[sortable]',
    standalone: true,
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()',
    },
})
export class NgbdSortableHeader<T> {
    @Input() sortable: string = '';
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();

    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
}