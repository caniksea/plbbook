import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-know-your-rights',
  templateUrl: './know-your-rights.component.html',
  styleUrls: ['./know-your-rights.component.css']
})
export class KnowYourRightsComponent implements OnInit {

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
