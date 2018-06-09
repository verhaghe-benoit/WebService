import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    private username: string;
    private password: string;

    constructor(private http: HttpClient, private router: Router) {}


    submit() {

        const formData: FormData = new FormData();
        formData.append('login', this.username);
        formData.append('password', this.password);

        this.http.post(`${environment.API}/users/login`, formData)

            .subscribe(response => {
                console.log(response[1]);
                if(response[1] == "200") {

                localStorage.setItem( 'lastname', response[0].lastname);
                localStorage.setItem( 'firstname', response[0].firstname);
                localStorage.setItem('email', response[0].email);
                localStorage.setItem('id', response[0].id);
                localStorage.setItem( 'token', response[0].token);
                location.reload(true);
                }else{
                    console.log("on a du se tapper une erreur du back");
                }

            });

    }

}
