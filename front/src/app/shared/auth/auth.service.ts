import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'; 
import {environment} from '../../../environments/environment';
import { UserService } from '../user/user.service';

const API_URL = environment.API_URL;

@Injectable({providedIn:"root"})
export class AuthService{
    constructor(private http:HttpClient, private userService:UserService){ 

    }

    login(username:string, password:string){
        return this.http
        .post(`${API_URL}/user/login`,
        {
            username:username,
            password:password
        },
        {
            observe:'response'
        })
        .pipe(tap((response:HttpResponse<any>)=>{            
            if(response){                                
                const authToken = response.headers.get("x-token");
                this.userService.setToken(authToken);         
            }
        }));
    }

    logout(){
        this.userService.logout();
    }
    signup(name:string,username:string,email:string,password:string){
        return this.http.post(`${API_URL}/user/signup`,{
            email,
            name,
            username,
            password
        },{
            observe:'response'
        }).pipe(tap((response:HttpResponse<any>)=>{
            if(response){
                const authToken = response.headers.get("x-token");
                this.userService.setToken(authToken);      
            }
        })).pipe(map((response)=>{
            return response.body.data.user;
        }));
    }
}