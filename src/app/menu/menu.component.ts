import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {MenuService} from './services/menu.service';
import {Chapter} from '../../shared/domains/chapter';
import {BookService} from '../../shared/services/book.service';
import {Section} from '../../shared/domains/section';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: boolean;
  chapters: Chapter[];
  sections: Section[];

  constructor(private dataTransferService: DataTransferService,
              private menuService: MenuService,
              private bookService: BookService) { }

  ngOnInit() {
    this.chapters = [];
    this.sections = [];
    this.dataTransferService.showMenu.subscribe(showMenu => this.showMenu = showMenu);
    this.getChapters('5dd6ad2b89b794b917294ba420c83474');
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
    }, () => {
      if (this.chapters) {
        this.chapters.forEach(chapter => this.getSections(chapter));
      }
    });
  }

  private getSections(chapter: Chapter) {
    console.log('Fetching chapter sections...');
    this.bookService.getSectionsInChapter(chapter.chapterId).subscribe(sections => {
      if (sections) {
        this.sections.push(...sections);
      }
    }, error => {
      console.error(error.message);
    }, () => {
    });
  }

  private getChapterSections(chapter: Chapter): Section[] {
    const chapterSections: Section[] = this.sections.filter(section => section.chapterId === chapter.chapterId)
    return chapterSections;
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

  getSectionLink(chapter: Chapter, section: Section): String {
    const chapterLink = chapter.chapterLink;
    const sectionTitle = section.sectionTitle;
    const sds = sectionTitle.split(' ');
    const sectionLinkData = [];
    sds.forEach(s => sectionLinkData.push(s.replace(/[^a-zA-Z ]/g, '')))
    const sectionLink = chapterLink + '/' + sectionLinkData.join('_');
    return sectionLink;
  }
}
