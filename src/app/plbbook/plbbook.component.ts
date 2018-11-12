import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {Chapter} from '../../shared/domains/chapter';
import {checkPort} from '@angular-devkit/build-angular/src/angular-cli-files/utilities/check-port';

@Component({
  selector: 'app-plbbook',
  templateUrl: './plbbook.component.html',
  styleUrls: ['./plbbook.component.css']
})
export class PlbbookComponent implements OnInit {

  chapters: Chapter[];

  constructor(private dataTransferService: DataTransferService) { }

  ngOnInit() {
    this.dataTransferService.bookChapters.subscribe(chapters => {
      this.chapters = chapters;
      console.log(this.chapters);
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

  getFirstChapter(chapters: Chapter[]) {
    return chapters.find(chapter => chapter.chapterNumber === 1).chapterTitle;
  }
}
