import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes:Routes =[
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                component:SigninComponent,
                data:{
                    Title:'Entrar'
                }
            },
            {
                path:'signup',
                component:SignUpComponent,
                data:{
                    Title:'Registrar'
                }
            }
        ]
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes),],
    exports:[ RouterModule ]
})
export class HomeRoutingModule{}