import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HomeComponent } from "./home.component";
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { HomeRoutingModule } from './home.routing.module';
import { InvalidMessageModule } from '../shared/components/invalidMessage/invalidMessage.module';

@NgModule({
    declarations:[SigninComponent,SignUpComponent, HomeComponent],
    imports:[
        CommonModule,
        ReactiveFormsModule,        
        RouterModule,
        FormsModule,
        HomeRoutingModule,
        InvalidMessageModule
    ],

})
export class HomeModule{}