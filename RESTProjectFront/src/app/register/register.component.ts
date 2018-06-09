import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';



@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent  {
    private username: string;
    private password: string;
    private firstname: string;
    private lastname: string;
    private gender: string;
    private birthday: string;
    private email: string;

    constructor(private http: HttpClient,
                private router: Router
    ) {}

    submit() {

        const formData: FormData = new FormData();
        formData.append('firstname', this.firstname);
        formData.append('lastname', this.lastname);
        formData.append('gender', this.gender);
        formData.append('email', this.email);
        formData.append('login', this.username);
        formData.append('password', this.password);
        formData.append('birthday', this.birthday);

        this.http.post(`${environment.API}/users/create`, formData)
            .subscribe(response => {
                console.log( 'lastname', this.lastname);
                console.log( 'firstname', this.firstname);
                console.log('email', this.email);
                console.log('gender', this.gender);
                console.log( 'login', this.username);
                console.log( 'password', this.password);
                console.log( 'birthday', this.birthday);
        });

        this.router.navigate(['/login']);



    }
}



