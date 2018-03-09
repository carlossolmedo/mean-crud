import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from "./services/login.service";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { ToShortDatePipe } from './pipes/to-short-date.pipe';
import { SearchComponent } from './components/search/search.component';
import { AuthService } from "./services/auth.service";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PageNotFoundComponent,
        ToShortDatePipe,
        SearchComponent,
        WelcomeComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [LoginService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
