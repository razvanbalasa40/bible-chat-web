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
    screenAlt: string;
    selected?: boolean;
  }[] = [
    {
      name: 'Creation',
      imageUrl: 'half-screen-creation',
      screenAlt: 'Bible Chat app - questions about the creation of the world',
      selected: true,
    },
    {
      name: 'End Times',
      imageUrl: 'half-screen-end',
      screenAlt: 'Bible Chat app - questions about the end of the world',
    },
    {
      name: 'Faith',
      imageUrl: 'half-screen-faith',
      screenAlt: 'Bible Chat app - questions about faith',
    },
    {
      name: 'Forgiveness',
      imageUrl: 'half-screen-forgiveness',
      screenAlt: 'Bible Chat app - questions about forgiveness',
    },
    {
      name: 'Money',
      imageUrl: 'half-screen-money',
      screenAlt: 'Bible Chat app - questions about money',
    },
    {
      name: 'Prayer',
      imageUrl: 'half-screen-prayer',
      screenAlt: 'Bible Chat app - questions about prayer',
    },
    {
      name: 'Relationship',
      imageUrl: 'half-screen-relationship',
      screenAlt: 'Bible Chat app - questions about relationships',
    },
    {
      name: 'Ressurection',
      imageUrl: 'half-screen-ressurection',
      screenAlt: 'Bible Chat app - questions about the resurrection',
    },
  ];

  public currentScreen: {
    name: string;
    imageUrl: string;
    screenAlt: string;
    selected?: boolean;
  } = this.screenNavLinks[0];

  constructor(private gtag: Gtag) {}

  ngOnInit(): void {}

  onSelect(index: number) {
    for (let screen of this.screenNavLinks.filter((s) => s.selected)) {
      screen.selected = false;
    }

    this.screenNavLinks[index].selected = true;
    this.currentScreen = this.screenNavLinks[index];

    this.gtag.event('view-phone-screen', {
      screen: this.screenNavLinks[index].name,
    });
  }

  redirectToSocial(socialPlatform: string) {
    this.gtag.event('footer_redirect_to_social', {
      platform: socialPlatform,
    });

    // switch (socialPlatform) {
    //   case 'facebook':
    //     window.location.href =
    //       'https://instagram.com/the.biblechat?igshid=MzRlODBiNWFlZA==';
    //     break;
    //   case 'instagram':
    //     window.location.href =
    //       'https://instagram.com/the.biblechat?igshid=MzRlODBiNWFlZA==';
    //     break;
    //   case 'tiktok':
    //     window.location.href =
    //       'https://www.tiktok.com/@biblechat.app?_t=8cYwXswcIix&_r=1';
    //     break;
    //   case 'youtube':
    //     window.location.href =
    //       'https://www.youtube.com/channel/UCq-zYscdvJu3Xn16NSegr7Q';
    //     break;
    // }
  }

  goToAppStore(ctaElement: string) {
    this.gtag.event('go_to_app_store_2', {
      cta: ctaElement,
    });

    // window.location.href =
    //   'https://apps.apple.com/ro/app/bible-study-ai-chatbot-memory/id6448849666';
  }
}
