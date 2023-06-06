import { Component, Input } from '@angular/core';
import { BlogPost } from '../../blog.models';

@Component({
  selector: 'app-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss'],
})
export class BlogPostCardComponent {
  @Input('post') post?: BlogPost;
}
