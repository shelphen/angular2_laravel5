import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import { HeaderComponent } from "./header.component";
import { HomeComponent } from "./home/home.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { Api } from "./services/api";

@Component({
    selector: 'my-app',
    template: `
       <my-header></my-header>
       <ul>
            <li *ngFor="let animal of animals">{{ animal.name }}</li>
       </ul>
       <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [Api]
})
@Routes([
    {path: 'home', component: HomeComponent},
    {path: 'auth', component: AuthenticationComponent}
])
export class AppComponent {
    animals: any;
    constructor(private api: Api){
        this.api.getAnimals().then(
            (res) => {
                this.animals = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }
}
