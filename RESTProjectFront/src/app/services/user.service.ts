import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable()



export class UserService {

    constructor(private http: HttpClient) { }


    findAll() {
        let token = localStorage.getItem( 'token');
        if(token != null) {
            console.log('cest bon pour toi tu as un token')
            return this.http.get(`${environment.API}/users`);
        } else {
            console.log('tu nas pas de token');
        }
    }

    findId(id){
        let token = localStorage.getItem( 'token');
        if(token != null) {
            console.log('cest bon pour toi tu as un token')
            return this.http.get(`${environment.API}/users/${id}`);
        } else {
            console.log('tu nas pas de token');
        }
    }

    getUserPublications(id){
        let token = localStorage.getItem( 'token');
        if(token != null) {
            return this.http.get(`${environment.API}/users/${id}/publications`);
        }
    }

    createRequest(request) {
        return this.http.post(`${environment.API}/friendrequest/create`, request);
    }
}
