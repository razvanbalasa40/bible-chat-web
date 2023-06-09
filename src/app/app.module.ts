import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { GtagModule } from 'angular-gtag';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostCardComponent } from './blog/blog-list/blog-post-card/blog-post-card.component';
import { SlugifyPipe } from './shared/pipes/slugify.pipe';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { PrivacyComponent } from './static/privacy/privacy.component';
import { EulaComponent } from './static/eula/eula.component';
import { TermsAndConditionsComponent } from './static/terms-and-conditions/terms-and-conditions.component';
import { ContactComponent } from './static/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './static/landing-pages/landing-page-big/landing-page.component';
import { LandingPageSmallComponent } from './static/landing-page-small/landing-page-small.component';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    BlogPostComponent,
    BlogListComponent,
    BlogPostCardComponent,
    SlugifyPipe,
    PrivacyComponent,
    EulaComponent,
    TermsAndConditionsComponent,
    ContactComponent,
    LandingPageComponent,
    LandingPageSmallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    HttpClientModule,
    CommonModule,
    GtagModule.forRoot({ trackingId: 'G-JW3BEGLW0Y', trackPageviews: true }),
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
