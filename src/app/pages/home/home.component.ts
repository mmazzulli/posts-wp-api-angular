import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordpressService } from '../../services/wordpress.service';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  private wordpressService = inject(WordpressService);

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {

    this.wordpressService.getPosts().subscribe({

      next: (response) => {
        console.log('Posts carregados:', response);
        this.posts = response;
      },

      error: (error) => {
        console.error('Erro ao carregar posts:', error);
      }

    });

  }

}