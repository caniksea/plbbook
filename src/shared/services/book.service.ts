import { Injectable } from '@angular/core';
import {SERVICE_BASE_URL} from '../../app/conf/util';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section} from '../domains/section';
import {SubSection} from '../domains/sub-section';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = SERVICE_BASE_URL + 'books/site/';

  constructor(private http: HttpClient) { }

  getSectionsInChapter(chapterId: string): Observable<Section[]> {
    const url = this.baseURL + 'sections/getall/' + chapterId;
    return this.http.get<Section[]>(url).pipe(
      // timeout(10000),
    );
  }

  getSubsectionsInSection(sectionId: string): Observable<SubSection[]> {
    const url = this.baseURL + 'subsections/getall/' + sectionId;
    return this.http.get<SubSection[]>(url).pipe(
      // timeout(10000),
    );
  }
}
