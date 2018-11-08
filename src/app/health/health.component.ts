import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }

}
