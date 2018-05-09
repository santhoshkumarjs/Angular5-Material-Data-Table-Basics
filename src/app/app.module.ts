import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { AppComponent } from './app.component';
import { UserlistsComponent } from './usercomponent/userlists/userlists.component';
import { UserlistservicesService } from './usercomponent/services/userlistservices.service'
import { Observable } from 'rxjs/observable';


@NgModule({
  declarations: [
    AppComponent,
    UserlistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [UserlistservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
