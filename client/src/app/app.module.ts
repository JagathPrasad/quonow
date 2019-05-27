import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';
import {PagesModule} from './pages/pages.module';

import { AppComponent } from './app.component';
import {NavbarComponent} from 'app/pages/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PagesModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
