import { Injectable } from '@angular/core';
import {  Observable, BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { IUser } from './Iuser';

@Injectable({providedIn:"root"})
export class UserService{
    private username:string;
    private userSubject = new BehaviorSubject<IUser>(null);
    constructor(private tokenService:TokenService
    ){

    }

    setToken(token:string){        
        this.tokenService.setToken(token);
        this.decodeAndNotify();    
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const tokenDecoded = jwt_decode(token);           
        this.username = tokenDecoded.user.username;   
        this.userSubject.next(tokenDecoded.user);
    }

    getUser():Observable<IUser>{
        return this.userSubject.asObservable();
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    getUserName(){
        return this.username;
    }

}