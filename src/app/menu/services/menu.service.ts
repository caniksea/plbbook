import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chapter} from '../../../shared/domains/chapter';
import {timeout} from 'rxjs/operators';
import {SERVICE_BASE_URL} from '../../conf/util';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getBookChapters(bookId: string): Observable<Chapter[]> {
    const url = SERVICE_BASE_URL + 'books/site/chapters/getall/' + bookId;
    return this.http.get<Chapter[]>(url).pipe(
      timeout(10000),
    );
  }
}
