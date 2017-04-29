import { Injectable } from '@angular/core';
import  { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private baseUrl = '';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getSearchResult(searchParam: string) : Promise<string[]>{
    return this.http
      .post(this.baseUrl, JSON.stringify({searchParam : searchParam}), {headers : this.headers})
      .toPromise()
      .then(result => result.json().data as string[])
      .catch (this.handleError);
  }



}
