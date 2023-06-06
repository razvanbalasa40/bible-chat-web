import { Component, OnInit, inject } from '@angular/core';
import { BlogPost } from '../blog.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public blogPosts: BlogPost[] = [];

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ posts }) => {
      this.blogPosts = posts;
    });
  }
}
