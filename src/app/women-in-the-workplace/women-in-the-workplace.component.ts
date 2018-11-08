import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-women-in-the-workplace',
  templateUrl: './women-in-the-workplace.component.html',
  styleUrls: ['./women-in-the-workplace.component.css']
})
export class WomenInTheWorkplaceComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }
}
