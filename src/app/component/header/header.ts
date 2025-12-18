import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  // Variables for UI state
  isDarkMode: boolean = false;
  isMenuOpen: boolean = false; // Tracks if mobile menu is open

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // 1. Check current theme on load
      const html = document.documentElement;
      this.isDarkMode = html.classList.contains('dark');
    }
  }

  // Toggle Dark/Light Mode
  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      const html = document.documentElement;

      if (this.isDarkMode) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }

  // Toggle Mobile Menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}