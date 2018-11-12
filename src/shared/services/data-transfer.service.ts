import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Chapter} from '../domains/chapter';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private isMenuVisible = new BehaviorSubject(false);
  showMenu: Observable<boolean> = this.isMenuVisible.asObservable();

  private isChapters = new BehaviorSubject(null);
  bookChapters: Observable<Chapter[]> = this.isChapters.asObservable();

  constructor() { }

  toggleMenu(showMenu: boolean) {
    this.isMenuVisible.next(showMenu);
  }

  setBookChapters(chapters: Chapter[]) {
    this.isChapters.next(chapters);
  }
}
