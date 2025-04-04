import {Component, input, output} from '@angular/core';
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
export class PaginationComponent {
  pageInfo = input.required<PageInfo>()
  pageChanged = output<number>()
  maxPages = input<number>(5)

  onPageChange(page: number): void {
    if (page >= 0 && page < this.pageInfo().totalPages && page !== this.pageInfo().number) {
      this.pageChanged.emit(page);
    }
  }

  get displayPages(): number[] {
    const totalPages = this.pageInfo().totalPages;
    const currentPage = this.pageInfo().number;
    const maxPages = this.maxPages();

    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    let startPage = Math.max(0, currentPage - Math.floor(maxPages / 2));
    let endPage = startPage + maxPages - 1;

    if (endPage >= totalPages) {
      endPage = totalPages - 1;
      startPage = endPage - maxPages + 1;
    }

    return Array.from({ length: maxPages }, (_, i) => startPage + i);
  }
}
