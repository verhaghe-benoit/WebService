import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()

export class FriendRequestService {



    constructor(private http: HttpClient) { }


    findFriendRequest(id) {
        return this.http.get(`${environment.API}/users/${id}/request`);
    }

    deleteRequest(id1, id2) {
        return this.http.delete(`${environment.API}/friendrequest/${id1}/${id2}/delete`
            , {headers : new HttpHeaders({'Access-Control-Allow-Origin' : '*'
                    , 'Access-Control-Allow-Methods' : '*'})});
    }

    acceptedRequest(friends) {
        return this.http.post(`${environment.API}/friends/create`, friends);
    }

}

