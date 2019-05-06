import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-foreword',
  templateUrl: './foreword.component.html',
  styleUrls: ['./foreword.component.css']
})
export class ForewordComponent implements OnInit {

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
