import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }
}
