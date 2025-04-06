import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IPuppy } from '../../interfaces/puppy.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly _apiURL: string;
  private readonly _apiKey: string;

  constructor(private readonly _http: HttpClient) {
    this._apiKey = environment.API_KEY;
    this._apiURL = 'https://api.thedogapi.com/v1/breeds';
  }

  public findPaginated(
    page: number = 0,
    limit: number = 10
  ): Observable<Array<Partial<IPuppy>>> {
    return this._http.get<Array<Partial<IPuppy>>>(
      `${this._apiURL}?limit=${limit}&page=${page}&has_breeds=1`,
      {
        headers: new HttpHeaders({ 'x-api-key': this._apiKey }),
      }
    );
  }
}
