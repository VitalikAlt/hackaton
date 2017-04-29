import { Injectable } from '@angular/core';
import  { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Record } from '../record'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class HttpService {

  private baseUrl = 'http://localhost:8080/';
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

  private extractData (res: Response) {
    let body = res.json();
    return body || { };
  }

  getSearchResult(searchParam: string) : Observable<string[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.baseUrl + 'search';

    return this.http
      .post(url, JSON.stringify({ searchParam }), options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTopFive() : Observable<Record[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let url = this.baseUrl + 'top';

    return this.http
      .get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }





}
