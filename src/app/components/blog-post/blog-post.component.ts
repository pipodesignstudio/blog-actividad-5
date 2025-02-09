import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-blog-post',
  imports: [CommonModule, DividerModule],
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
