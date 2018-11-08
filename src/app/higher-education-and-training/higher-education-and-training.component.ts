import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-higher-education-and-training',
  templateUrl: './higher-education-and-training.component.html',
  styleUrls: ['./higher-education-and-training.component.css']
})
export class HigherEducationAndTrainingComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.toggleMenu(true);
  }
}
