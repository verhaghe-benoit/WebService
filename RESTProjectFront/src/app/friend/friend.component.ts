import {Component } from '@angular/core';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-users',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {

  private friends: any;
  private lastname: any;
  private toto = [];

    constructor(private friendService: FriendService) {

    }

    ngOnInit() {
        let id = localStorage.getItem( 'id');
        this.friendService.findFriend(id)
            .subscribe(response => {
                this.friends = response;

        })
    }


    deleteThis(id2){
        let id1 = localStorage.getItem('id');

        this.friendService.deleteFriend(id1,id2)
            .subscribe(response => {
                this.friends = response;
            });

        this.friendService.deleteFriend(id2,id1)
            .subscribe(response => {
                this.friends = response;
            });

    }

}
