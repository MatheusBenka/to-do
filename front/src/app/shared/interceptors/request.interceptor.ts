import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest ,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { getLocaleFirstDayOfWeek } from '@angular/common';
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private tokenService:TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      
        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken();                        
            req = req.clone({
                headers: req.headers
                            .set('Authorization', token)
            });            
        }
        
        return next.handle(req);
    }
}