import { Component, OnInit } from '@angular/core';
import { HttpService} from './services/http.service';

import { Record } from './record'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchResult: string[];
  notFound: boolean;
  searchHelp: string[];
  topFive: Record[];


  ngOnInit(){
    this.getTopFive();
  }

  constructor (private httpService: HttpService) {}

  onSearchInputChanged(value: string){
    this.searchHelp = new Array();
  }

  search(searchInput: string) : void {

    if (!searchInput) return;

    this.httpService.getSearchResult(searchInput)
      .subscribe
      (result =>{
          if (result.length > 0){
            this.searchResult = result;
            this.notFound = false;
          }
          else {
            this.notFound = true;
            this.searchResult = [""];
          }
        }
      ),
      error => console.error(error)
  };

  getTopFive() : void {
    this.httpService.getTopFive()
      .subscribe
      (
        result => this.topFive = result,
        error => console.error(error)
      )
  }

}
