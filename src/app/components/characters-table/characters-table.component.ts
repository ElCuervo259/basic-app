import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersTableComponent implements OnInit {

  public characters: any[] = [];
  
// new table
  dataSource = new MatTableDataSource();

  // Columns
  displayedColumns: string[] = ['nombre','estado','genero','especie','imagen'];

  // method filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private charactersService: RickMortyService) { }

  ngOnInit(): void {

  //  Obtain all the characters
    this.charactersService.getCharacters().subscribe(
      (data) => {    
        this.dataSource = new MatTableDataSource(data.results);
      },
      (error) => {
        this.characters = [];
        
      }
    );
  }

}
