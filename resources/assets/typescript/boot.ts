/// <reference path="../../../typings/browser.d.ts" />
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {
  LocationStrategy,
  HashLocationStrategy
}
from '@angular/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    AuthService,
    ErrorService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
