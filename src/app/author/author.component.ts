import {Component, Input, OnChanges, SimpleChanges, OnInit, Injector} from '@angular/core';
import {Author} from "../entities/author/author.model";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements  OnInit, OnChanges{
@Input()  author:Author ={} as Author;

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
