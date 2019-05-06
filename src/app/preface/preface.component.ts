import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-preface',
  templateUrl: './preface.component.html',
  styleUrls: ['./preface.component.css']
})
export class PrefaceComponent implements OnInit {

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
