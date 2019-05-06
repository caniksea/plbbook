import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

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
