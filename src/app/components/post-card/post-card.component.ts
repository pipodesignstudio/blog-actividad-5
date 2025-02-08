import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BlogPost } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-card',
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @Input({required: true}) post!:BlogPost;
  @Output() handlePostSelected =  new EventEmitter<BlogPost>();

  onPostSelected() {
    this.handlePostSelected.emit(this.post);
  }

 }
