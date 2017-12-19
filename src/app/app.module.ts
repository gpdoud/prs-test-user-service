import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
