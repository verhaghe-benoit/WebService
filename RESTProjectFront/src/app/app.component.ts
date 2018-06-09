import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenBook';
    private token: string;
    private nom: string;
    private prenom: string;
    private email: any;
    constructor(private router: Router){

    }

    ngOnInit() {

        this.token = localStorage.getItem('token');
        this.nom = localStorage.getItem('lastname');
        this.prenom = localStorage.getItem('firstname');
        this.email = localStorage.getItem('email');

    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);

    }


}


