import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-loading',
  imports: [],
  templateUrl: './blog-loading.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogLoadingComponent { }
