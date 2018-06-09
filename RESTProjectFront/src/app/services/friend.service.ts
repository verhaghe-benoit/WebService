import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers, RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable()

export class FriendService {

    constructor(private http: HttpClient) { }



    findFriend(id) {
        return this.http.get(`${environment.API}/users/${id}/friends`);
    }

    deleteFriend(id1,id2) {

        return this.http.delete(`${environment.API}/friends/${id1}/${id2}/delete`);
    }

}

