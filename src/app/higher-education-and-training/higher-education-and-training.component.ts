import {Component, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {Chapter} from '../../shared/domains/chapter';
import {Section} from '../../shared/domains/section';
import {ExtendedSection} from '../../shared/domains/extended-section';
import {BookService} from '../../shared/services/book.service';

@Component({
  selector: 'app-higher-education-and-training',
  templateUrl: './higher-education-and-training.component.html',
  styleUrls: ['./higher-education-and-training.component.css']
})
export class HigherEducationAndTrainingComponent implements OnInit {

  private CURRENT_CHAPTER = 4;

  chapters: Chapter[];
  chapter: Chapter;
  previousChapter: Chapter;
  nextChapter: Chapter;
  sections: Section[];
  extendedSections: ExtendedSection[];

  constructor(private dataTransferService: DataTransferService,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.dataTransferService.bookChapters.subscribe(chapters => {
      if (chapters) {
        this.chapters = chapters;
        this.chapter = chapters.find(c => c.chapterNumber === this.CURRENT_CHAPTER);
        this.previousChapter = chapters.find(c => c.chapterNumber === (this.CURRENT_CHAPTER - 1));
        this.nextChapter = chapters.find(c => c.chapterNumber === (this.CURRENT_CHAPTER + 1));
        if (this.chapter) { this.getChapterSections(); }
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

  private getChapterSections() {
    console.log('Fetching chapter sections...');
    this.bookService.getSectionsInChapter(this.chapter.chapterId).subscribe(sections => {
      if (sections) {
        this.sections = sections;
      }
    }, error => {
      console.error(error.message);
    }, () => {
      if (this.sections) {
        this.extendedSections = [];
        this.sections.forEach(section => this.getSubsections(section));
        this.extendedSections.sort( (s1, s2) => s1.sectionNumber - s2.sectionNumber);
        console.log(this.extendedSections);
      }
    });
  }

  getSubsections(section: Section): void {
    console.log('Fetching subsections...');
    this.bookService.getSubsectionsInSection(section.sectionId).subscribe(subsections => {
      if (subsections) {
        // console.log(subsections);
        const ges: ExtendedSection = Object.create(section);
        ges.subsections = subsections;
        this.extendedSections.push(ges);
      }
    });
  }
}
