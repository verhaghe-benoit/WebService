import {Component } from '@angular/core';
import { UserService } from '../services/user.service';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  private users: any;
  private request_date: string;
  private user_idRequester: string;
  private user_idRequestee: string;
  private myid:any;

    constructor(private userService: UserService,
                private http: HttpClient) {

    }

    ngOnInit() {
        this.userService.findAll()
            .subscribe(response => {
                this.users = response;
        });
        this.myid = localStorage.getItem('id');

    }

    friendRequest(id2){

        const formData: FormData = new FormData();
        let id = localStorage.getItem('id');
        formData.append('user_IdRequester', id);
        formData.append('user_IdRequestee', id2);

       console.log(id);
       console.log(id2);


        this.userService.createRequest(formData)
            .subscribe(response => {
                console.log( response);
            });
    }




}
