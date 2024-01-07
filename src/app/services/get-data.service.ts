import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    public http: HttpClient
  ) { 
  }
  getAllCharacters() {
      return this.http.get('assets/data/characters.json');
  }
}
