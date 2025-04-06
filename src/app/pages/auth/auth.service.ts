import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _username: string;
  private readonly _password: string;

  constructor(@Inject(PLATFORM_ID) private _platform: Object) {
    this._username = environment.USERNAME;
    this._password = environment.PASSWORD;
  }

  private _setAuthenticated(): void {
    if (isPlatformBrowser(this._platform))
      localStorage.setItem('isAuthenticated', 'TRUE');
  }

  public login(credentials: { username: string; password: string }): boolean {
    if (
      credentials.username !== this._username ||
      credentials.password !== this._password
    )
      return false;

    this._setAuthenticated();
    return true;
  }

  public get isAuthenticated(): boolean {
    if (isPlatformBrowser(this._platform))
      return localStorage.getItem('isAuthenticated') === 'TRUE';

    return false;
  }

  public logout(): void {
    if (isPlatformBrowser(this._platform))
      localStorage.removeItem('isAuthenticated');
  }
}
