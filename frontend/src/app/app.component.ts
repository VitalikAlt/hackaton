import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService} from './services/http.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchResult: string[];
  notFound: boolean;
  searchHelp: string[];
  topFive: string[];
  newKey: string; // new abbreviation
  newValue: string; // description for new abbreviation
  modalError : string = ''; // error message for modal
  incorrectInput: boolean; // incorrect abb input message

  @ViewChild('content') content: any;

  filesToUpload: Array<File>;


  ngOnInit(){
    this.getTopFive();
    this.newKey = '';
  }

  constructor (
    private httpService: HttpService,
    private modalService: NgbModal
  ) {}

  addNewDescription (){
    if (!this.newValue)
      return this.modalError = 'Please, input the description of word!';

    this.httpService.saveDescription(this.newKey, this.newValue)
      .subscribe
      (
        result => this.content.close(),
        error => console.error(error)
      )
  }

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
        result => this.topFive = result,
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

  openModal() {
    this.modalError = '';
    console.log('key: ' + this.newKey);
    if (this.newKey){
      this.incorrectInput = false;
      this.modalService.open(this.content, {size: 'lg'})
    }
    else this.incorrectInput = true;
  }


}
