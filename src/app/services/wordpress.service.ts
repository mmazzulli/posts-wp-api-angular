import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Post } from '../models/post.interface';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/posts?_embed`;

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

}