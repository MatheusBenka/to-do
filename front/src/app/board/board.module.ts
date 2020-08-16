import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InvalidMessageModule } from '../shared/components/invalidMessage/invalidMessage.module';

import { ColumnsComponent } from "./columns/columns.component";
import { ColumnComponent } from './columns/column/column.component';
import { NewColumnComponent } from './columns/new-column/new-column.component';
import { BoardComponent } from "./board.component";
import { BoardRoutingModule } from "./board.routing.module";

@NgModule({
    declarations:[BoardComponent,ColumnsComponent, ColumnComponent, NewColumnComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,        
        RouterModule,
        FormsModule,
        InvalidMessageModule,
        BoardRoutingModule
    ],
})
export class BoardModule{
  constructor() {}
}