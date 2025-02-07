import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';
import { BlogTheme } from './theme/blog-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: BlogTheme,
                options: {
                  darkModeSelector: '.dark',
                  cssLayer: {
                    name: 'primeng',
                    order: 'tailwind-base, primeng, tailwind-utilities',
                  },
                },
            }
        })
  
  ]
};
