import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FullmeanService} from './fullmean.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component'; // <-- Import 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule, 
  ],
  providers: [FullmeanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
