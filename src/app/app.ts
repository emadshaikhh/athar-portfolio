import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, Footer, Header], 
  templateUrl: './app.html', 
  styleUrl: './app.css' 
})
export class AppComponent implements AfterViewInit {
  title = 'ATHAR-PORTFOLIO';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initDarkMode();
      // Note: We removed initScrollAnimations here because we are using CSS smooth scroll now
    }
  }

  // 1. Just check the settings when the app starts
  initDarkMode() {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    
    // Check local storage or system preference
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}