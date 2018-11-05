import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private isMenuVisible = new BehaviorSubject(false);
  showMenu: Observable<boolean> = this.isMenuVisible.asObservable();

  constructor() { }

  toggleMenu(showMenu: boolean) {
    this.isMenuVisible.next(showMenu);
  }
}
