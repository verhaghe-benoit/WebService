import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    private profile: any;
    private password: string;
    private firstname: string;
    private lastname: string;
    private gender: string;
    private birthday: string;
    private email: string;


    constructor(private userService: UserService,
                private http: HttpClient) {
    }

    ngOnInit() {
        let id = localStorage.getItem('id');
        this.userService.findId(id)
            .subscribe(response => {
                this.profile = response;
            });
    }

    submit() {

        const formData: FormData = new FormData();
        formData.append('firstname', this.firstname);
        formData.append('lastname', this.lastname);
        formData.append('gender', this.gender);
        formData.append('email', this.email);
        formData.append('password', this.password);
        formData.append('birthday', this.birthday);
        let id = localStorage.getItem('id')

        this.http.put(`${environment.API}/users/${id}/edit`, formData)
            .subscribe(response => {
                console.log(response[1]);
                if (response[1] == '200') {
                    localStorage.setItem('lastname', response[0].lastname);
                    localStorage.setItem('firstname', response[0].firstname);
                    location.reload(true);
                } else {
                    console.log('erreur du back');
                }
            });


    }

}
