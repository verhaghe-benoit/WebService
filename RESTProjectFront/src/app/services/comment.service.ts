import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
@Injectable()

export class CommentService {

    constructor(private http: HttpClient) { }

    insert(data) {
        return this.http.post(`${environment.API}/comments`, data) ;
    }

    findAll() {
        return this.http.get(`${environment.API}/comments`);
    }

    getCommentPublication(id){
        return this.http.get(`${environment.API}/comments/publications/${id}`);
    }

}
