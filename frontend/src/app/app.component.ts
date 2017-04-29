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
    this.httpService.getSearchResult(searchInput)
      .then (answer => this.searchResult = answer)
  }

}
