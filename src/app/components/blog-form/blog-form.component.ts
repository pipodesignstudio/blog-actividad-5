import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-form',
  imports: [],
  templateUrl: './blog-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogFormComponent { }
