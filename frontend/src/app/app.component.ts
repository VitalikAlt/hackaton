import { Component, OnInit } from '@angular/core';
import { HttpService} from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private searchText: string[];
  searchResult: string[];
  notFound: boolean;
  searchHelp: string[];
  topFive: string[];

  filesToUpload: Array<File>;


  ngOnInit(){
    this.getTopFive();
  }

  constructor (private httpService: HttpService) {}

  fileChangedEvent(fileInput: any){
    this.filesToUpload = fileInput.target.files;
  }

  upload() {
    this.httpService.makeFileRequest(this.filesToUpload).then((result) => {
      console.log(result);
    }, (error) => {
      console.error(error);
    });
  }



  search(searchInput: string) : void {

    if (!searchInput) return;


    this.httpService.getSearchResult(searchInput)
      .subscribe(result => {
          if (result.length > 0){
            this.searchResult = result;
            this.notFound = false;
            this.getTopFive();
          }
          else {
            this.notFound = true;
            this.searchResult = [""];
          }
        }, error => console.error(error))
  };

  getTopFive() : void {
    this.httpService.getTopFive()
      .subscribe
      (
        result => this.topFive = result.reverse(),
        error => console.error(error)
      )
  }

  onSearchInputChanged(value: string){
    if (value != ""){
      this.httpService.getSearchHelpData(value)
        .subscribe
        (
          result => this.searchHelp = result,
          error => console.error(error)
        )
    }

  }

}
