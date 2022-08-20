import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BookSearch} from '../../app.types';

const URL = 'https://www.googleapis.com/books/v1/';
const API_KEY = 'AIzaSyBGeSX8w86b85hqDRz3_p1jD1f0VSSgNBc';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  searchForBooks(searchTerm: string): Observable<BookSearch> {
    return this.http.get<BookSearch>(`${URL}volumes?q=${searchTerm.search}+intitle:keyes&key=${API_KEY}`);
  }
}
