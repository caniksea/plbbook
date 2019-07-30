import {Component, OnChanges, OnInit} from '@angular/core';
import {DataTransferService} from '../../shared/services/data-transfer.service';
import {Chapter} from '../../shared/domains/chapter';
import {Section} from '../../shared/domains/section';
import {BookService} from '../../shared/services/book.service';
import {SubSection} from '../../shared/domains/sub-section';
import {ExtendedSection} from '../../shared/domains/extended-section';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.css'],
})
export class EmergenciesComponent implements OnInit, OnChanges {

  CURRENT_CHAPTER = 1;

  chapters: Chapter[];
  chapter: Chapter;
  previousChapter: Chapter;
  nextChapter: Chapter;
  sections: Section[];
  extendedSections: ExtendedSection[];
  // sani: DomSanitizer

  constructor(private dataTransferService: DataTransferService,
              private bookService: BookService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.sani = this.sanitizer;
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
      }
    });
  }

  getSubsections(section: Section): void {
    console.log('Fetching subsections...');
    this.bookService.getSubsectionsInSection(section.sectionId).subscribe(subsections => {
      if (subsections) {
        const ges: ExtendedSection = Object.create(section);
        ges.subsections = subsections;
        this.extendedSections.push(ges);
      }
    });
  }

  selectedSection(index, section) {
    console.log(section);
  }

  ngOnChanges(): void {
    console.log('Fetching subsections...');
  }

  processDisplay(story: string) {
    const startSearchValue = /<figure class="media"><oembed url=/g;
    const replaceValue = '<div class="video-container"><iframe width="600" height="480" src=';
    const endReplaceValue = '</iframe></div>';
    const endSearchValue = /<\/oembed><\/figure>/g
    const backupEndReplace = '<\/iframe>';
    const backupReplace = '<iframe width="580" height="380" src=';
    // story = story.replace(/<oembed url=/g, replaceValue);
    story = story.replace(startSearchValue, replaceValue);
    // story = story.replace(/<\/oembed>/g, endReplaceValue);
    story = story.replace(endSearchValue, endReplaceValue);
    return this.sanitizer.bypassSecurityTrustHtml(story);
  }
}
