import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }

}
