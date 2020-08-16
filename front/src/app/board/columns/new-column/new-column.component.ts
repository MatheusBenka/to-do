import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { colorBackgroudValidator } from '../../../shared/validators/color-backgroud-validator';
import { ColumnsService } from 'src/app/shared/columns/columns.service';
import { Column } from 'src/app/shared/columns/column';
import { Router } from '@angular/router';
@Component({
    selector:'td-new-column',
    templateUrl:'./new-column.component.html',
    styleUrls:['./new-column.component.css']
})
export class NewColumnComponent implements OnInit{
    isNewFormInit:boolean = false;
    newColumnForm:FormGroup;    

    constructor(private formBuilder:FormBuilder,private columnService:ColumnsService,private router:Router){}
    ngOnInit(){
        this.newColumnForm = this.formBuilder.group({
            name:[
                '',
                Validators.required
            ],
            description:[
                '',
                Validators.required
            ],
            color:[
                '#64ca6f',
                [
                    Validators.required,
                    colorBackgroudValidator   
                ]  
            ]
        });
    }

    addColumn(){
        const name = this.newColumnForm.get('name').value;
        const description = this.newColumnForm.get('description').value;
        const color = this.newColumnForm.get('color').value;
        const newColumn = {title:name,description:description,color:color } as Column;
        this.columnService.addColumn(newColumn)
        .subscribe(
            ()=>{ window.location.reload(); },
            (error)=>{
                this.newColumnForm.reset();
                console.log(error);
        });
    }

    initNewColumnForm(){
        this.isNewFormInit = true;       
    }
    cancelNewColumn(){
        this.isNewFormInit = false;        
        this.newColumnForm.reset();
    }
}