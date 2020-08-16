import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColumnsComponent } from './columns/columns.component';
import { BoardComponent } from './board.component';
const routes:Routes = [
    {
        path:'',
        component:BoardComponent,
        children:[
            {
                path:'',
                component:ColumnsComponent,
                data:{
                    Title:'Board'
                }
            }
        ]
    }
];


@NgModule({
    imports:[ RouterModule.forChild(routes),],
    exports:[ RouterModule ]
})
export class BoardRoutingModule{}