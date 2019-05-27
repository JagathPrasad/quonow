import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { routing } from '../login/login.routing';
import { FormsModule } from '@angular/forms';
//import { ImageUploadComponent } from '../shared/image.component';
import {ForgotComponent} from '../login/forgot.component';



// import { AuthService } from '../auth/auth.service';
// import { JWTService } from '../auth/jwt.service';
// import { LoginService } from '../login/login.service';

@NgModule({
    declarations: [LoginComponent, ForgotComponent],
    imports: [CommonModule, routing, FormsModule]
    , exports: [LoginComponent]
})

export class LoginModule {

    constructor() {

    }
}