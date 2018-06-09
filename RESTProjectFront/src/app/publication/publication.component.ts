import { Component } from '@angular/core';
import {UserService} from '../services/user.service';
import {CommentService} from '../services/comment.service';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent  {

    private publications: any;
    private contenu: string;
    private comment_contenu: string;
    private comments: any;
    private publication_id: any;
    private comment_publication_id: any;
    private bordel: Array<any>;
    private publication_content: string;

    constructor(private userService: UserService,
                private commentService: CommentService,
                private http: HttpClient) {}

    ngOnInit() {

        let id = localStorage.getItem( 'id');

        this.userService.getUserPublications(id)
            .subscribe(response => {
                this.publications = response;
            });

        this.commentService.findAll()
            .subscribe(response => {
                this.comments = response;
            });
        console.log(this.comments);
    }

    submit() {

        let id = localStorage.getItem('id');
        const formData: FormData = new FormData();

        formData.append('publication_content', this.contenu);
        formData.append('publication_user_id', id);
       this.http.post(`${environment.API}/publications/create`, formData)
            .subscribe(response => {
                console.log(response);
            });
    }

    submitComment(pub_id) {

        let id = localStorage.getItem('id');
        const formData: FormData = new FormData();
        console.log(this.comment_publication_id);

        formData.append('comment_content', this.comment_contenu);
        formData.append('comment_user_id', id);
        formData.append('comment_publication_id', pub_id);

        this.http.post(`${environment.API}/comments/create`, formData)
            .subscribe(response => {
                console.log(response);
            });

    }


}
