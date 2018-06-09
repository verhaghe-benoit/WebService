import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable()

export class PublicationService {

    constructor(private http: HttpClient) { }

    findAll() {
        let token = localStorage.getItem( 'token');
        if(token != null) {
            return this.http.get(`${environment.API}/publications`);
        }
    }

    create(publication) {
        return this.http.post(`${environment.API}/publications/create`, publication);
    }

}
