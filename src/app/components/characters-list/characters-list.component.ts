import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characters: any[] = [];
  constructor(public getDataService: GetDataService) {
    this.getDataService.getAllCharacters().subscribe((listOfCharacter) => {
      const arrOfCharacters = Object.values(listOfCharacter);
      this.characters = arrOfCharacters.splice(0, 10);
    });
  }
}
