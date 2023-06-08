import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogPostResolver } from './blog/blog-post/blog-post.resolver';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostsResolver } from './blog/blog-list/blog-posts.resolver';
import { HomeResolver } from './home.resolver';
import { TermsAndConditionsComponent } from './static/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './static/privacy/privacy.component';
import { EulaComponent } from './static/eula/eula.component';
import { ContactComponent } from './static/contact/contact.component';
import { LandingPageComponent } from './static/landing-pages/landing-page-big/landing-page.component';
import { LandingPageSmallComponent } from './static/landing-page-small/landing-page-small.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          posts: HomeResolver,
        },
      },
      // {
      //   path: 'blog',
      //   component: BlogComponent,
      //   children: [
      //     {
      //       path: '',
      //       component: BlogListComponent,
      //       resolve: {
      //         posts: BlogPostsResolver,
      //       },
      //     },
      //     {
      //       path: ':blogPostSlug',
      //       component: BlogPostComponent,
      //       resolve: {
      //         post: BlogPostResolver,
      //       },
      //     },
      //   ],
      // },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyComponent,
      },
      {
        path: 'eula',
        component: EulaComponent,
      },
    ],
  },
  {
    path: 'landing-big',
    component: LandingPageComponent,
  },
  {
    path: 'landing-small',
    component: LandingPageSmallComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
