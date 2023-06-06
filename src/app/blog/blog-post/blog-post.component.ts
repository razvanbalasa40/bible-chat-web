import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../blog.models';
import { Storage, getBytes, getDownloadURL, ref } from '@angular/fire/storage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private storage: Storage = inject(Storage);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  @ViewChild('paragraphs') paragraphs?: ElementRef<HTMLInputElement>;

  public blogPost?: BlogPost;
  public topImage?: SafeUrl;

  constructor() {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ post }) => {
      if (post[0]) {
        this.blogPost = post[0];

        const storageRef = ref(this.storage, this.blogPost?.topImage);

        // let objectURL =  getDownloadURL(storageRef);
        getDownloadURL(storageRef).then((url) => {
          this.topImage = url;
        });
      }
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  scroll(paragraph: number) {
    const child = this.paragraphs?.nativeElement.children[
      paragraph
    ].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
