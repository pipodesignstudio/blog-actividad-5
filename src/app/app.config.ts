import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { BlogTheme } from './theme/blog-theme';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Formateo la app en castellano para los pipes de las fechas ppalmente
registerLocaleData(localeEs, 'es-ES');


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es-ES' },
    provideAnimationsAsync(),
        providePrimeNG({
          ripple: true,
          translation: {
            dayNamesMin: ['D','L', 'M', 'X', 'J', 'V', 'S'],
            firstDayOfWeek: 0,
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            dateFormat: 'dd/mm/yy'
          },
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
