import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IPuppy } from '../../interfaces/puppy.interface';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'home',
  standalone: true,
  styleUrl: './home.component.sass',
  templateUrl: './home.component.html',
  imports: [CommonModule, HeaderComponent, CardComponent],
})
export class HomeComponent implements OnInit {
  private readonly _puppyService = inject(HomeService);
  public puppies: Array<Partial<IPuppy>>;

  constructor() {
    this.puppies = [];
  }

  ngOnInit(): void {
    this._getPuppiesPaginated(0, 12);
  }

  private _getPuppiesPaginated(page: number = 0, pageSize: number = 10): void {
    this._puppyService.findPaginated(page, pageSize).subscribe((res) => {
      this.puppies = res;
    });
  }
}
