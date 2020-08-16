import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
@Component({    
    templateUrl:'./signin.component.html'
})
export class SigninComponent implements OnInit{
    loginForm:FormGroup;    
    constructor(
        private router:Router, 
        private authService:AuthService,
        private formBuilder:FormBuilder,
        private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.authService.logout();
        this.loginForm = this.formBuilder.group({
            userName:
            [
                '',
                Validators.required,
            ],
            password:[
                '',
                Validators.required
            ]
        });
    }

    doLogin(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.login(userName,password)
            .subscribe((user)=>{
                this.router.navigate(['board']);
            },(error)=>{
                console.log(error);
                this.loginForm.reset();
            });
    }
}