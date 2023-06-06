import { Component, ViewEncapsulation, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public router: Router = inject(Router);
  public menuToggled = false;
  public burgerSrc = 'assets/img/burger-menu-icon.svg';

  toggleMenu() {
    if (window.innerWidth <= 768) {
      this.menuToggled = !this.menuToggled;
      if (this.menuToggled) {
        this.burgerSrc = 'assets/img/close-menu-icon.svg';
        document.body.style.height = '100vh';
        document.body.style.width = '100vw';
        document.body.style.overflow = 'hidden';
      } else {
        this.burgerSrc = 'assets/img/burger-menu-icon.svg';
        document.body.style.height = 'initial';
        document.body.style.width = 'initial';
        document.body.style.overflow = 'initial';
      }
    }
  }
}
