import { Component, ViewEncapsulation } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingPageComponent {
  constructor(private gtag: Gtag) {}

  goToAppStore(ctaElement: string) {
    this.gtag.event('go_to_app_store', {
      cta: ctaElement,
    });
    window.location.href =
      'https://apps.apple.com/ro/app/bible-study-ai-chatbot-memory/id6448849666';
  }
}
