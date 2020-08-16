import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PasswordValidator} from './signup-password-validator';
import { lowercaseValidator } from '../../shared/validators/lowercase-validator';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./signup.component.html',
    styleUrls:['./signup.component.css']
})
export class SignUpComponent implements OnInit{
    signupForm:FormGroup;
    constructor(private formBuider:FormBuilder,private authService:AuthService, private router:Router){}

    ngOnInit(){
        this.signupForm = this.formBuider.group(
            {
                name:[
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.maxLength(100),
                    ]                                        
                ],
                username:[
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.maxLength(20),
                        lowercaseValidator,
                    ]
                    
                ],
                email:[
                    '',
                    [
                        Validators.required,
                        Validators.email
                    ]                    
                ],
                password:[
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.maxLength(20)
                    ]
                    
                ],
                confirmPassword:[
                    '',
                    [
                        Validators.required,
                    ]                 
                ]
            },{
                validators:PasswordValidator
            }
        )
    }

    register(){
        const name = this.signupForm.get('name').value;
        const username = this.signupForm.get('username').value;
        const email = this.signupForm.get('email').value;
        const password = this.signupForm.get('password').value;
        this.authService.signup(name,username,email,password)
        .subscribe((user)=>{
            this.router.navigate(['board']);
        },(error)=>{
            console.log(error);            
        })
    }
}