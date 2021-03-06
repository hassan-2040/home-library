import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeLibraryRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BookService } from './book.service';
import { BookFormComponent } from './book-form/book-form.component';
import { NewBookComponent } from './new-book/new-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NewUserComponent,
    BookFormComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeLibraryRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
