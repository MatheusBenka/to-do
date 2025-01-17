import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path:'home',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
    },
    {
        path:'board',
        loadChildren:() => import('./board/board.module').then(m=>m.BoardModule)
    }
];

@NgModule({
    imports:[ RouterModule.forRoot(routes, {useHash:true} ),],
    exports:[ RouterModule ]
})
export class AppRoutingModule{}