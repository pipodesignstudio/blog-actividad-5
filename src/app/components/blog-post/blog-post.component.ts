import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  imports: [],
  templateUrl: './blog-post.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPostComponent { }
