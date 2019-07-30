import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../../../shared/services/data-transfer.service';
import {BookService} from '../../../shared/services/book.service';
import {Section} from '../../../shared/domains/section';
import {Chapter} from '../../../shared/domains/chapter';
import {ExtendedSection} from '../../../shared/domains/extended-section';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-cpr',
  templateUrl: './cpr.component.html',
  styleUrls: ['./cpr.component.css']
})
export class CprComponent implements OnInit {

  CHAPTER_NUMBER = 1;
  SECTION_NUMBER = 2;
  chapter: Chapter;
  section: Section;
  sections: Section[];
  extendedSection: ExtendedSection;

  constructor(private dataTransferService: DataTransferService,
              private bookService: BookService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.dataTransferService.bookChapters.subscribe(chapters => {
      if (chapters) {
        this.chapter = chapters.find(c => c.chapterNumber === this.CHAPTER_NUMBER);
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
        this.section = sections.find(s => s.sectionNumber === this.SECTION_NUMBER);
      }
    }, error => {
      console.error(error.message);
    }, () => {
      if (this.section) {
        this.getSubsections(this.section);
      }
    });
  }

  getSubsections(section: Section): void {
    console.log('Fetching subsections...');
    this.bookService.getSubsectionsInSection(section.sectionId).subscribe(subsections => {
      if (subsections) {
        const ges: ExtendedSection = Object.create(section);
        ges.subsections = subsections;
        this.extendedSection = ges;
      }
    });
  }

  processDisplay(story: string) {
    if (!story) { return ''; }
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
