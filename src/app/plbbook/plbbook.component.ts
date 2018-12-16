import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {Chapter} from '../../shared/domains/chapter';
import {BookService} from '../../shared/services/book.service';
import {Section} from '../../shared/domains/section';
import {ExtendedSection} from '../../shared/domains/extended-section';

@Component({
  selector: 'app-plbbook',
  templateUrl: './plbbook.component.html',
  styleUrls: ['./plbbook.component.css']
})
export class PlbbookComponent implements OnInit {

  private CURRENT_CHAPTER = 0;

  chapters: Chapter[];
  chapter: Chapter;
  previousChapter: Chapter;
  nextChapter: Chapter;

  constructor(private dataTransferService: DataTransferService,
              private bookService: BookService) { }

  ngOnInit() {
    this.dataTransferService.bookChapters.subscribe(chapters => {
      if (chapters) {
        this.chapters = chapters;
        this.chapter = chapters.find(c => c.chapterNumber === this.CURRENT_CHAPTER);
        this.previousChapter = chapters.find(c => c.chapterNumber === (this.CURRENT_CHAPTER - 1));
        this.nextChapter = chapters.find(c => c.chapterNumber === (this.CURRENT_CHAPTER + 1));
        // if (this.chapter) { this.getChapterSections(); }
      }
    });
  }

  showMenu() {
    this.dataTransferService.toggleMenu(true);
    return false;
  }

  closeMenu() {
    this.dataTransferService.toggleMenu(false);
    return true;
  }
}
