import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user/user-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
