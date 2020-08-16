import { Component, OnInit, Input } from '@angular/core';
import { Column } from '../../../shared/columns/column';
@Component({
    selector:'td-column',
    templateUrl:'./column.component.html',
    styleUrls:['./column.component.css']
})
export class ColumnComponent implements OnInit{
    @Input()column:Column = null;
    constructor(){}

    ngOnInit(){
        
    }
}