import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-plbbook',
  templateUrl: './plbbook.component.html',
  styleUrls: ['./plbbook.component.css']
})
export class PlbbookComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
    return false;
  }

  closeMenu() {
    this.menuService.toggleMenu(false);
    return true;
  }

}
