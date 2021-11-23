import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public query: string;
  public result: string = '';
  @Input() labelButton: string = '';
  public charactersSearch: any;
  public messageNoResults: string = '';
  public charname: string = '';
  public charId:string = "" ;
  
  constructor(private rickmortyService: RickMortyService) {
    this.query = '';
  }

ngOnInit():void{}


// Method search by Name
  searchByName(form: any) {

    if (form.valid) {
      this.rickmortyService.getCharactersByName(form.value).subscribe(
        (data) => {
          this.charactersSearch = data.results;
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }//end searchbyName

  // Method search by ID
  searchById(form: any) {

    if (form.valid) {
      this.rickmortyService.getCharactersById(form.value).subscribe(
        (data) => {
          this.charactersSearch = [data];
          this.messageNoResults = '';
        },
        (error) => {
          this.charactersSearch = [];
          this.messageNoResults =
            'Consulta errónea. No se encontraron resultados.';
        }
      );
    }
  }//end searchbyId


}
