import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-women-in-the-workplace',
  templateUrl: './women-in-the-workplace.component.html',
  styleUrls: ['./women-in-the-workplace.component.css']
})
export class WomenInTheWorkplaceComponent implements OnInit {

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
