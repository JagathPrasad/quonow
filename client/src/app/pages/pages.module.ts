import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from '../pages/pages.routing';
import { PagesComponent } from '../pages/pages.component';


import { AuthService } from './auth/auth.service';
import { JWTService } from './auth/jwt.service';
import { LoginService } from './login/login.service';
import {User } from './commonModels/userModel';
import {userService} from './auth/user.service';

@NgModule({
    imports: [CommonModule, routing],
    declarations: [PagesComponent],
    providers: [AuthService,JWTService,userService,LoginService]
})

export class PagesModule {

    constructor() {

    }
}