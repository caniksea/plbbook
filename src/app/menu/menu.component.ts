import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: boolean;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.showMenu.subscribe(showMenu => this.showMenu = showMenu);
  }

  closeMenu() {
    this.menuService.toggleMenu(false);
    return true;
  }

}
