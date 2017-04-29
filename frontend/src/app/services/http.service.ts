import { Injectable } from '@angular/core';
import  { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpService {

  private baseUrl = 'http://localhost:8080/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getSearchResult(searchParam: string) : Observable<string[]>{
    return this.http
      .post(this.baseUrl + 'search', JSON.stringify({searchParam : searchParam}), {headers : this.headers})
      .map(this.extractData)
      .catch(this.handleError);
  }



}
