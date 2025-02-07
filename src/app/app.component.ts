import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChangeThemeBtnComponent } from "./components/change-theme-btn/change-theme-btn.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, DividerModule, ChangeThemeBtnComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Actividad 5 - Blog';
}
