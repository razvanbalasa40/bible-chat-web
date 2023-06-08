import { Component, ViewEncapsulation } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-landing-page-small',
  templateUrl: './landing-page-small.component.html',
  styleUrls: ['./landing-page-small.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageSmallComponent {
  constructor(private gtag: Gtag) {}

  goToAppStore(ctaElement: string) {
    this.gtag.event('go_to_app_store', {
      cta: ctaElement,
    });
    window.location.href =
      'https://apps.apple.com/ro/app/bible-study-ai-chatbot-memory/id6448849666';
  }
}
