import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

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
