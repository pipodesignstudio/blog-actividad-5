import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces';

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
export class BlogPostComponent { 
  @Input() post: BlogPost | null = null;
}
