import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/not-found/not-found.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
