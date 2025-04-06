import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../pages/auth/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'header',
  styleUrl: './header.component.sass',
  templateUrl: './header.component.html',
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
  ],
})
export class HeaderComponent {
  @Input() title!: string;

  private _router = inject(Router);
  private _authService = inject(AuthService);

  public signOut(): void {
    this._authService.logout();
    this._router.navigate(['/auth']);
  }
}
