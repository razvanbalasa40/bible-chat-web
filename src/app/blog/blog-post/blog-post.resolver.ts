import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { BlogPost, BlogPostParagraph } from '../blog.models';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable, firstValueFrom, map, mergeMap, take } from 'rxjs';
import { inject } from '@angular/core';

export const BlogPostResolver: ResolveFn<BlogPost[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const firestore: Firestore = inject(Firestore);
  const blogPostQuery = query(
    collection(firestore, 'blog-posts'),
    where('slug', '==', route.params['blogPostSlug'])
  );

  return collectionData(blogPostQuery, { idField: 'id' }).pipe(
    mergeMap((post: BlogPost[]) => {
      return collectionData(
        collection(firestore, `blog-posts/${post[0].id}/paragraphs`)
      ).pipe(
        map((paragraphs) => {
          console.log(paragraphs);
          post[0].paragraphs = paragraphs;
          return post;
        })
      );
    })
  );
};
