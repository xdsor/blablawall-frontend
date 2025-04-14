import {Component, input, OnChanges, output, SimpleChanges} from '@angular/core';
import {PageInfo} from '../../models/PageInfo';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-pagination',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent implements OnChanges {
  pageInfo = input.required<PageInfo>()
  pageChanged = output<number>()
  maxPages = input<number>(5)


  visiblePages: number[] = [];
  showLeftEllipsis = false;
  showRightEllipsis = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pageInfo'] || changes['maxPages']) {
      this.generatePagination();
    }
  }

  private generatePagination(): void {
    if (!this.pageInfo || this.pageInfo().totalPages < 1) {
      this.visiblePages = [];
      this.showLeftEllipsis = false;
      this.showRightEllipsis = false;
      return;
    }

    const total = this.pageInfo().totalPages;

    if (total === 1) {
      this.visiblePages = [];
      this.showLeftEllipsis = false;
      this.showRightEllipsis = false;
      return;
    }

    if (total <= this.maxPages()) {
      this.visiblePages = [];
      for (let i = 2; i < total; i++) {
        this.visiblePages.push(i);
      }
      this.showLeftEllipsis = false;
      this.showRightEllipsis = false;
      return;
    }

    const visibleCount = this.maxPages() - 2;
    const current = this.pageInfo().number + 1;

    let start = current - Math.floor(visibleCount / 2);
    let end = current + Math.floor(visibleCount / 2);

    if (start < 2) {
      start = 2;
      end = start + visibleCount - 1;
    }
    if (end > total - 1) {
      end = total - 1;
      start = end - visibleCount + 1;
    }

    this.visiblePages = [];
    for (let i = start; i <= end; i++) {
      this.visiblePages.push(i);
    }
    this.showLeftEllipsis = start > 2;
    this.showRightEllipsis = end < total - 1;
  }

  selectPage(page: number): void {
    const current = this.pageInfo().number + 1;
    if (page !== current) {
      this.pageChanged.emit(page - 1);
    }
  }
}
