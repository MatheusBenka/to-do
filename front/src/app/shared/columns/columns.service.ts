import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Observable } from "rxjs";
import { Column } from "./column";
import { TokenService } from '../token/token.service';
const API_URL = environment.API_URL;
@Injectable({
    providedIn:'root'
})
export class ColumnsService{
    constructor(private http:HttpClient){}

    getColumns():Observable<Column[]>{
        return this.http
        .get<Column[]>(`${API_URL}/user/columns`);        
    }

    addColumn(column:Column){
        return this.http.post(`${API_URL}/user/columns`,{column:column});
    }
}