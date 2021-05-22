import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { environment } from '@env/environment';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // apiURLCategories = environment.apiUrl + 'categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/api/v1/categories');
  }
}
