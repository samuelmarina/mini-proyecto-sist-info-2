import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import {  AngularFireModule } from "@angular/fire"
import {  AngularFireDatabaseModule } from "@angular/fire/database"
import {  AngularFireAuthModule } from "@angular/fire/auth"


import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { CharacterComponent } from './screens/character/character.component';
import { LoginComponent } from './screens/login/login.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CharacterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
