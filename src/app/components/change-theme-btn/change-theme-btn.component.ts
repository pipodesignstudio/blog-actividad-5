import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../services';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-change-theme-btn',
  imports: [ButtonModule],
  templateUrl: './change-theme-btn.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeThemeBtnComponent { 
  private ts = inject(ThemeService);
  public isDarkTheme = computed(() => this.ts.darkTheme())

  public onToggleTheme = () => this.ts.toggleDarkMode();

}
