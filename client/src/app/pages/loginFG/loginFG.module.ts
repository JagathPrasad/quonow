import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginFGRouting } from '../loginFG/loginFG.routing';
import { LoginFGComponent } from '../loginFG/loginFG.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginFGComponent],
    imports: [CommonModule, loginFGRouting, FormsModule]
})

export class LoginFGModule {

}