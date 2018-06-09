import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { ProfileComponent } from './profile/profile.component';
import { PublicationComponent } from './publication/publication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import {FriendComponent} from './friend/friend.component';
import {FriendRequestComponent} from './friendrequest/friendrequest.component';
import {LoginComponent} from './login/login.component';

import { UserService } from './services/user.service';
import {PublicationService} from './services/publication.service';
import {CommentService} from './services/comment.service';
import {FriendService} from './services/friend.service';
import { FriendRequestService } from './services/friendrequest.service';




const appRoutes: Routes = [
    {path: '', component: HomepageComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'publications', component: PublicationComponent},
    {path: 'users', component: UsersComponent},
    {path: 'friends', component: FriendComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'request', component: FriendRequestComponent}
];
@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        PublicationComponent,
        HomepageComponent,
        UsersComponent,
        FriendComponent,
        FriendRequestComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],
    providers: [
        UserService,
        PublicationService,
        CommentService,
        FriendService,
        FriendRequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }