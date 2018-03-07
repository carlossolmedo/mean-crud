import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
    domain: string = 'http://localhost:3000/api';
    // domain: string = 'www.mydomainapi.com/';

    constructor(private http: HttpClient) { }

    getLogins() {
        return this.http.get<User[]>(`${this.domain}/login`).map(res => res);
    }

    getOneLogin(id) {
        return this.http.get<User>(`${this.domain}/login/${id}`).map(res => res);
    }

    addLogin(newUser: User) {
        return this.http.post<User>(`${this.domain}/login`, newUser).map(res => res);
    }

    deleteLogin(id) {
        return this.http.delete<User>(`${this.domain}/login/${id}`).map(res => res);
    }

    updateLogin(newUser) {
        return this.http.put<User>(`${this.domain}/login/${newUser._id}`, newUser);
    }
}
