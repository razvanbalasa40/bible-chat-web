import { Component } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private gtag: Gtag) {}

  redirectToSocial(socialPlatform: string) {
    this.gtag.event('footer_redirect_to_social', {
      platform: socialPlatform,
    });
  }

  goToAppStore(ctaElement: string) {
    this.gtag.event('go_to_app_store', {
      cta: ctaElement,
    });
  }
}
