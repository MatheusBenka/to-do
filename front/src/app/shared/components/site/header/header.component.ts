import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../../../user/Iuser';
import { UserService } from 'src/app/shared/user/user.service';
@Component({
    selector:'td-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{
    user$:Observable<IUser>;
    constructor(private router:Router, private userService:UserService){
        this.user$ = this.userService.getUser();
    }

    logout(){
        this.router.navigate(['']);
    }
}