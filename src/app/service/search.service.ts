import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {

  private http: Http;

  constructor(http: Http) {
    this.http = http;
  }


  public search(term: string): Observable<Array<any>> {

    return this.http
      .get('http://localhost:12345/data?query=' + term)
      .map(response => {
        return response.json();
      });
  }
}
