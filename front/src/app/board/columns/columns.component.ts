import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from '../../shared/columns/column';
import { ColumnsService } from '../../shared/columns/columns.service';
@Component({
    templateUrl:'./columns.component.html',
    styleUrls:['./columns.component.css']
})
export class ColumnsComponent implements OnInit{
    columns$:Observable<Column[]>;
    columnDetail:Column;
    constructor(private service:ColumnsService){                
    }

    ngOnInit(){
        this.columns$ = this.service.getColumns();                
    }
}