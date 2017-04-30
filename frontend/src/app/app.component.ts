import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService} from './services/http.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import  { SearchResult } from './search-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchResult: SearchResult[]; // overall search results
  searchFirstRow: SearchResult[]; // first row search result
  searchSecondRow: SearchResult[]; // second row

  notFound: boolean;
  searchHelp: string[];
  topFive: string[];
  uploadHelper: string;
  newKey: string; // new abbreviation
  newValue: string; // description for new abbreviation
  modalError : string = ''; // error message for modal
  incorrectInput: boolean; // incorrect abb input message

  @ViewChild('content') content: any;
  @ViewChild('content1') content1: any;

  filesToUpload: Array<File>;


  ngOnInit(){
    this.getTopFive();
    this.newKey = '';
    this.searchResult = [];
  }

  constructor (
    private httpService: HttpService,
    private modalService: NgbModal
  ) {}

  addNewDescription (close){
    if (!this.newValue)
      return this.modalError = 'Please, input the description of word!';

    this.httpService.saveDescription(this.newKey, this.newValue)
      .subscribe
      (
        result => {close(); this.newKey = '';},
        error => console.error(error)
      )
  }

  fileChangedEvent(fileInput: any){
    this.filesToUpload = fileInput.target.files;
  }

  upload(c) {
    this.uploadHelper = 'Загрузка...';
    this.httpService.makeFileRequest(this.filesToUpload).then((result) => {
      c();
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
            this.searchResult = [];
          }
        }, error => console.error(error))

    this.searchFirstRow = new Array();
    this.searchSecondRow = new Array();
    for (let i = 0; i < this.searchResult.length; i++){
      if (i % 2 == 0)
        this.searchSecondRow.push(this.searchResult[i]);
      else
        this.searchFirstRow.push(this.searchResult[i]);
    }


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

  openUpload() {
    this.uploadHelper = '';
    this.modalService.open(this.content1, {size: 'lg'})
  }
}
