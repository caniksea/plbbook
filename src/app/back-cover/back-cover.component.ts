import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-back-cover',
  templateUrl: './back-cover.component.html',
  styleUrls: ['./back-cover.component.css']
})
export class BackCoverComponent implements OnInit {

  constructor(private dataTransferService: DataTransferService) { }

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
