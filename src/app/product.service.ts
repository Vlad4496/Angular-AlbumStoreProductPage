import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private _http: HttpClient) { }

  _albumUrl = "../assets/album.json"

  getAlbum(id: Number): Observable<Album> {
    return this._http.get<Album>(this._albumUrl)
  }
}
