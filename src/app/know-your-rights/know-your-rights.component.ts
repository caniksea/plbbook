import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-know-your-rights',
  templateUrl: './know-your-rights.component.html',
  styleUrls: ['./know-your-rights.component.css']
})
export class KnowYourRightsComponent implements OnInit {

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
