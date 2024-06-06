import {NgModule} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BaseComponent} from "./base/base.component";
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BdTableComponent} from "./bd-table/bd-table.component";

@NgModule({
    declarations: [



    ],
    imports: [
        CommonModule
    ],
    providers: [DecimalPipe,
        BaseComponent,
        BdTableComponent,
        ImageUploadComponent
    ],
    exports: [
        DecimalPipe,
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class SharedModule {
}
