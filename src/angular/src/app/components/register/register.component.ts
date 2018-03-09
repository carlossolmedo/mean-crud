import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import { LoginService } from "../../services/login.service";
import { User } from "../../models/user";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    users: User[];
    name: string;
    password: string;

    constructor(
        private authService: AuthService,
        private loginService: LoginService,
        private router: Router
    ) { }

    ngOnInit() {

    }
    register(formData) {
        console.log(formData);
        this.authService.register(formData).subscribe(
            data => {this.handleRegisterSuccess(data),
                error => this.handleRegisterFailure(error)
            });
        this.name = formData.name;
        this.password = formData.password;
        this.addLogin();
    }

    handleRegisterSuccess(data) {
        console.log('success', data);
        // this.router.navigate(['/welcome']);
    }

    handleRegisterFailure(error) {
        console.error('failure', error);
    }

    addLogin() {
        let newUser: User = {
            name: this.name,
            password: this.password,
            dateCreate: new Date(),
            isDone: false
        };

        this.loginService.addLogin(newUser).subscribe(user => {
            this.users.push(user);
            this.name = '';
            this.password = '';
        });
    }
}
