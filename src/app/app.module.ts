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
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CharacterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: "fav",
        component: FavoritesComponent
      },
      {
        path: "character/:id",
        component: CharacterComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
