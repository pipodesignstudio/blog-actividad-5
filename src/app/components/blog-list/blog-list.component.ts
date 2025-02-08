import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { BlogPost } from '../../interfaces';
import { PostCardComponent } from "../post-card/post-card.component";
import { DialogModule, Dialog } from 'primeng/dialog';
import { BlogPostComponent } from "../blog-post/blog-post.component";

@Component({
  selector: 'app-blog-list',
  imports: [PostCardComponent, DialogModule, BlogPostComponent],
  templateUrl: './blog-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  @Input({required:true}) blogPosts:BlogPost[] = [];
  @ViewChild('dialog') dialog?: Dialog

  public visible: boolean = false;
  public selectedPost: BlogPost | null = null;

  handlePostSelected(event:BlogPost) {
    this.selectedPost = event;
    this.visible = true;
  }

  handleUnselectPost() {
    this.selectedPost = null;
    this.visible = false;
  }

 }
