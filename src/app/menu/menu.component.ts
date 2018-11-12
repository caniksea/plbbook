import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {MenuService} from './services/menu.service';
import {Chapter} from '../../shared/domains/chapter';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: boolean;
  chapters: Chapter[];

  constructor(private dataTransferService: DataTransferService,
              private menuService: MenuService) { }

  ngOnInit() {
    this.chapters = [];
    this.dataTransferService.showMenu.subscribe(showMenu => this.showMenu = showMenu);
    this.getChapters('8a0456ae8c9080b720ef99ebabf7669c');
  }

  closeMenu() {
    this.dataTransferService.toggleMenu(false);
    return true;
  }

  private getChapters(bookId: string): void {
    this.menuService.getBookChapters(bookId).subscribe(chapters => {
      if (chapters) {
        this.chapters = chapters;
        this.dataTransferService.setBookChapters(chapters);
      } else {
        console.log('No chapters!');
      }
    }, error => {
      console.error('Menu::Could not get chapters:: ' + error.message);
    }, () => {});
  }

  getChapterImage(chapterNumber: number): string {
    switch (chapterNumber) {
      case 1: {
        return 'emergencies/Emergency-Kit.png';
        break;
      }
      case 2: {
        return 'health/Happy-Healthy.png';
        break;
      }
      case 3: {
        return 'family/Happy-Family.png';
        break;
      }
      case 4: {
        return 'higher_education_training/Female-Education.png';
        break;
      }
      case 5: {
        return 'women_in_the_workplace/Women-in-the-workplace.png';
        break;
      }
      case 6: {
        return 'finance_banking/Finance.png';
        break;
      }
      case 7: {
        return 'know_your_rights/South-African-Female-Rights-Court.png';
        break;
      }
      case 8: {
        return 'useful_contacts/Useful-Contacts-for-Females.png';
        break;
      }
      default: {
        return 'Motsepe-Foundation.png';
      }
    }
  }
}
