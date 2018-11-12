import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-useful-contacts',
  templateUrl: './useful-contacts.component.html',
  styleUrls: ['./useful-contacts.component.css']
})
export class UsefulContactsComponent implements OnInit {

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
