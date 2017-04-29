import { Component } from '@angular/core';
import { HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchResult: string[];


  constructor (private httpService: HttpService) {}

  search(searchInput: string) : void {
    if (!searchInput) { console.log("searchInput is undefined"); return;}

    this.httpService.getSearchResult(searchInput)
      .subscribe
      (result => {this.searchResult = result; console.log('!!!!!!!!!!!', result);},
        error => console.log(error));

    console.log(this.searchResult);
  }

}
