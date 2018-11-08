import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-useful-contacts',
  templateUrl: './useful-contacts.component.html',
  styleUrls: ['./useful-contacts.component.css']
})
export class UsefulContactsComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }

  closeMenu() {
    this.menuService.toggleMenu(false);
    return true;
  }
}
