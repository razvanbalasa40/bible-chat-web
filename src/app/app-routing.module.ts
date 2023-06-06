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
        ],
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
