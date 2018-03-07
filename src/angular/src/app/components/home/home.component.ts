import { Component, OnInit } from '@angular/core';

import { LoginService } from "../../services/login.service";
import { User } from "../../models/user";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    users: User[];

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.getLogins();
    }

    getLogins() {
        this.loginService.getLogins().subscribe(users => {
            console.log(users);
            this.users = users;
        });
    }

    deleteLogin(id) {
        const response = confirm('Voulez vous supprimer cet utilisateurs ?');
        if(response) {
            const users = this.users;
            this.loginService.deleteLogin(id).subscribe(data => {
                console.log(data.n);
                if(data.n == 1) {
                    for(let i = 0; i < users.length; i++) {
                        if(users[i]._id == id) {
                            users.splice(i, 1);
                        }
                    }
                }
            });
        }
    }

    updateLogin(user: User) {
        let newUser = {
            _id: user._id,
            name: user.name,
            password: user.password,
            isDone: !user.isDone
        };
        this.loginService.updateLogin(newUser).subscribe(res => {
            user.isDone = !user.isDone;
        });
    }

}
