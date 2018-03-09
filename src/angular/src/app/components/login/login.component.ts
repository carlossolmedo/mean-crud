import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService } from "../../services/login.service";
import { AuthService } from "../../services/auth.service";
import { User } from "../../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    users: User[];
    name: string;
    password: string;
    newUser = false;
    loginData = null;
    isAuthenticated = false;
    welcomeMessage = '';

    constructor(
        private loginService: LoginService,
        private authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        this.getLogins();
        if (this.authService.userIsLoggedIn()) {
            this.refreshFlag();
        }
    }

    refreshFlag() {
        this.welcomeMessage = 'Welcome';
        this.router.navigate(['/welcome']);

        /*let interval = setInterval(() => {
            clearInterval(interval)
            this.router.navigate(['/welcome']);
        }, 1000);*/
    }

    login(formData) {
        console.log(formData);
        this.authService.login(formData).subscribe(
            data => {this.handleLoginSuccess(data),
            error => this.handleLoginFailure(error)
        });
    }
    handleLoginSuccess(data) {
        console.log('success', data);
        this.loginData = data;
        this.refreshFlag();
        localStorage.setItem('login-data', JSON.stringify(data));
        this.isAuthenticated = true;
    }

    handleLoginFailure(error) {
        console.error('failure', error);
    }

    getLogins() {
        this.loginService.getLogins().subscribe(users => {
           console.log(users);
           this.users = users;
        });
    }

    addLogin(event) {
        event.preventDefault();
        const newUser: User = {
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
