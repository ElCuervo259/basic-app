import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public query: string ="";
  public result: string = "";
  
  @Input() labelButton: string = '';
  @Output() searchEvent = new EventEmitter();

  constructor() {

    // this.query="";
   }

  ngOnInit(): void {
  }

  search() {
    
    this.result = `Consulta realizada con jquery ${this.query}`;
    this.searchEvent.emit({ query: this.query, resultado: this.result });
  }

}
