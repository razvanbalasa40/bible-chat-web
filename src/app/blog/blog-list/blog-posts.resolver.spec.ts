import { TestBed } from '@angular/core/testing';

import { BlogPostsResolver } from './blog-posts.resolver';

describe('BlogPostsResolver', () => {
  let resolver: BlogPostsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogPostsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
