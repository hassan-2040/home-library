import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeLibraryRoutingModule } from './app-routing.module';

import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewUserSessionComponent } from './new-user-session/new-user-session.component';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NewUserComponent,
    NewUserFormComponent,
    NewUserSessionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [Angular2TokenService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
