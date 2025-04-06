import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPuppy } from '../../interfaces/puppy.interface';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'home',
  standalone: true,
  styleUrl: './home.component.sass',
  templateUrl: './home.component.html',
  imports: [CommonModule, HeaderComponent, CardComponent, MatButtonModule],
})
export class HomeComponent implements OnInit {
  private _currentPage = 0;
  private readonly _pageSize = 12;

  private readonly _puppyService = inject(HomeService);
  public puppies: Array<Partial<IPuppy>>;

  constructor() {
    this.puppies = [];
  }

  ngOnInit(): void {
    this._getPuppiesPaginated(this._currentPage, this._pageSize);
  }

  private _getPuppiesPaginated(page: number = 0, pageSize: number = 10): void {
    this._puppyService.findPaginated(page, pageSize).subscribe((res) => {
      this.puppies = res;
    });
  }

  public onNextPage(): void {
    this._currentPage += 1;
    this._getPuppiesPaginated(this._currentPage, this._pageSize);
  }

  public onPreviousPage(): void {
    if (this._currentPage <= 0) return;

    this._currentPage -= 1;
    this._getPuppiesPaginated(this._currentPage, this._pageSize);
  }
}
