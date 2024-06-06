import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorComponent} from './author/author.component';
import {AuthorsComponent} from './authors/authors.component';
import {AuthorArticleComponent} from "./author/author-article/author-article.component";
import {AuthorCommentComponent} from "./author/author-comment/author-comment.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';
import {BdTableComponent} from "./shared/bd-table/bd-table.component";
import {SharedModule} from "./shared/shared.module";

import {FormGroup, FormsModule} from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        AuthorComponent,
        AuthorsComponent,
        AuthorArticleComponent,
        AuthorCommentComponent,

    ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        BdTableComponent,

    ],

    schemas:  [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        DecimalPipe,
        SharedModule,
        BdTableComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
