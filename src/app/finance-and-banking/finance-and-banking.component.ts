import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../shared/services/menu.service';

@Component({
  selector: 'app-finance-and-banking',
  templateUrl: './finance-and-banking.component.html',
  styleUrls: ['./finance-and-banking.component.css']
})
export class FinanceAndBankingComponent implements OnInit {

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
