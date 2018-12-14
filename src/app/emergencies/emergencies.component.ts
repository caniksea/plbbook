import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {Chapter} from '../../shared/domains/chapter';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css']
})
export class EmergenciesComponent implements OnInit {

  private CURRENT_CHAPTER = 1;

  chapters: Chapter[];
  chapter: Chapter;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit() {
    this.dataTransferService.bookChapters.subscribe(chapters => {
      if (chapters) {
        this.chapters = chapters;
        this.chapter = chapters.find(c => c.chapterNumber === this.CURRENT_CHAPTER);
        console.log(this.chapter);
      }
    });
  }

  showMenu() {
    this.dataTransferService.toggleMenu(true);
  }

  closeMenu() {
    this.dataTransferService.toggleMenu(false);
    return true;
  }

  getNextChapter(chapters: Chapter[]) {
    return chapters.find(chapter => chapter.chapterNumber === (this.CURRENT_CHAPTER + 1)).chapterTitle;
  }

  getNextChapterLink(chapters: Chapter[]) {
    return chapters.find(chapter => chapter.chapterNumber === (this.CURRENT_CHAPTER + 1)).chapterLink;
  }
}
