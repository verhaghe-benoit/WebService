import {Component } from '@angular/core';
import { FriendRequestService } from '../services/friendrequest.service';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './friendrequest.component.html',
  styleUrls: ['./friendrequest.component.css']
})

export class FriendRequestComponent {

  private request: any;

    constructor(private friendrequestService: FriendRequestService,
                private http: HttpClient) {

    }

    ngOnInit() {
        let id = localStorage.getItem( 'id');
        this.friendrequestService.findFriendRequest(id)
            .subscribe(response => {
                this.request = response;
        })
    }


    declineRequest(id_friend){
        let id = localStorage.getItem('id');
        this.friendrequestService.deleteRequest(id_friend, id)
            .subscribe(response => {
            })
    }

    acceptRequest(id2) {

        let id = localStorage.getItem('id');
        const formData: FormData = new FormData();
        const formData2: FormData = new FormData();

        formData.append('friend_user_id1', id2);
        formData.append('friend_user_id2', id);

        this.friendrequestService.acceptedRequest(formData)
            .subscribe(response => {
            });

        formData2.append('friend_user_id1', id);
        formData2.append('friend_user_id2', id2);

        this.friendrequestService.acceptedRequest(formData2)
            .subscribe(response => {
            });
    }

}
