import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import { User } from "../models/user";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
    domain: string = 'http://localhost:3000/auth';

    constructor(private http: HttpClient, public router: Router) { }

    login(credentials: User) {
        return this.http.post<User>(`${this.domain}/login`, credentials).map(res => res);
    }

    userIsLoggedIn() {
        return localStorage.getItem('login-data');
    }

    logOut() {
        localStorage.removeItem('login-data');
        this.router.navigate(['/login']);
    }
}
