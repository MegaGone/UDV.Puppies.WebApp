import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _username: string;
  private readonly _password: string;

  constructor() {
    this._username = environment.USERNAME;
    this._password = environment.PASSWORD;
  }

  public login(credentials: { username: string; password: string }): boolean {
    return credentials.username !== this._username ||
      credentials.password !== this._password
      ? false
      : true;
  }
}
