import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  readonly root_url = "https://rickandmortyapi.com/api/character/"

  constructor(private http: HttpClient) { }

  getCharacters(params) {
    return this.http.get(this.root_url + "?name=" + params.name + "&page=" + params.page);
  }

  getCharacterById(id) {
    return this.http.get(this.root_url + id);
  }

  getCharacterByName(name) {
    return this.http.get(this.root_url + "?name=" + name);
  }

  getCharactersByPage(page) {
    return this.http.get(this.root_url + "?page=" + page);
  }
}
