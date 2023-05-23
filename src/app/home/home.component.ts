import { Component, OnInit } from '@angular/core';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public screenNavLinks: {
    name: string;
    imageUrl: string;
    selected?: boolean;
  }[] = [
    {
      name: 'Creation',
      imageUrl: 'half-screen-creation',
      selected: true,
    },
    {
      name: 'End',
      imageUrl: 'half-screen-end',
    },
    {
      name: 'Faith',
      imageUrl: 'half-screen-faith',
    },
    {
      name: 'Forgiveness',
      imageUrl: 'half-screen-forgiveness',
    },
    {
      name: 'Money',
      imageUrl: 'half-screen-money',
    },
    {
      name: 'Prayer',
      imageUrl: 'half-screen-prayer',
    },
    {
      name: 'Relationship',
      imageUrl: 'half-screen-relationship',
    },
    {
      name: 'Ressurection',
      imageUrl: 'half-screen-ressurection',
    },
  ];

  public currentScreen = 'half-screen-creation';

  constructor(private gtag: Gtag) {}

  ngOnInit(): void {}

  onSelect(index: number) {
    for (let screen of this.screenNavLinks.filter((s) => s.selected)) {
      screen.selected = false;
    }

    this.screenNavLinks[index].selected = true;
    this.currentScreen = this.screenNavLinks[index].imageUrl;

    this.gtag.event('view-phone-screen', {
      screen: this.screenNavLinks[index].name,
    });
  }

  redirectToSocial(socialPlatform: string) {
    this.gtag.event('footer_redirect_to_social', {
      platform: socialPlatform,
    });

    switch (socialPlatform) {
      case 'facebook':
        window.location.href =
          'https://instagram.com/the.biblechat?igshid=MzRlODBiNWFlZA==';
        break;
      case 'instagram':
        window.location.href =
          'https://instagram.com/the.biblechat?igshid=MzRlODBiNWFlZA==';
        break;
      case 'tiktok':
        window.location.href =
          'https://www.tiktok.com/@biblechat.app?_t=8cYwXswcIix&_r=1';
        break;
    }
  }

  goToAppStore(ctaElement: string) {
    this.gtag.event('go_to_app_store', {
      cta: ctaElement,
    });

    window.location.href =
      'https://apps.apple.com/ro/app/bible-study-ai-chatbot-memory/id6448849666"';
  }
}
