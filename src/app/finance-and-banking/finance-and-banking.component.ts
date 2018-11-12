import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-finance-and-banking',
  templateUrl: './finance-and-banking.component.html',
  styleUrls: ['./finance-and-banking.component.css']
})
export class FinanceAndBankingComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
  }

  showMenu() {
    this.dataTransferService.toggleMenu(true);
  }

  closeMenu() {
    this.dataTransferService.toggleMenu(false);
    return true;
  }
}
