import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"
import {  AngularFireModule } from "@angular/fire"
import {  AngularFireDatabaseModule } from "@angular/fire/database"
import {  AngularFireAuthModule } from "@angular/fire/auth"
import { HttpClientModule } from "@angular/common/http"
import { MatIconModule } from '@angular/material/icon'


import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { CharacterComponent } from './screens/character/character.component';
import { LoginComponent } from './screens/login/login.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CharacterComponent,
    LoginComponent,
    NavbarComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: "fav",
        component: FavoritesComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "character/:id",
        component: CharacterComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
