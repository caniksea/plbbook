import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';

@Component({
  selector: 'app-acknowledgements',
  templateUrl: './acknowledgements.component.html',
  styleUrls: ['./acknowledgements.component.css']
})
export class AcknowledgementsComponent implements OnInit {

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
