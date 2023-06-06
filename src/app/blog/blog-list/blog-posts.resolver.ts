import { inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BlogPost } from '../blog.models';

export const BlogPostsResolver: ResolveFn<BlogPost[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const blogPostCollection = collection(inject(Firestore), 'blog-posts');
  return collectionData(blogPostCollection) as Observable<BlogPost[]>;
};
