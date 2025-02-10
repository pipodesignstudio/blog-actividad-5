import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BlogService } from '../../services';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { BlogPost } from '../../interfaces';
import { generatePostContent } from '../../utils/form-content-generator';

@Component({
  selector: 'app-new-post-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule,
    TextareaModule,
    InputTextModule,
    DatePickerModule,
  ],
  templateUrl: './new-post-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostFormComponent {
  @Output() handleNewPost = new EventEmitter<{
    status: 'ok' | 'ko';
    error: string | null;
  }>();

  private fb = inject(FormBuilder);
  private bs = inject(BlogService);

  public newPostForm = this.fb.group({
    image: ['', Validators.required],
    title: ['', [Validators.required, Validators.minLength(10)]],
    author: ['', [Validators.required, Validators.minLength(5)]],
    date: [, [Validators.required]],
    extract: ['', [Validators.required, Validators.minLength(60)]],
    content: ['', [Validators.required, Validators.minLength(100)]],
  });

  public previewCover = signal<string | null>(null);
  public sizeMaxError = signal<boolean>(false);

  onFileSelected(event: Event) {
    this.sizeMaxError.set(false);
    const target = event.target as HTMLInputElement;
    if (!target.files?.length) return;

    const file = target.files[0];

    if (file.size > 1024 * 360) {
      this.sizeMaxError.set(true);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.newPostForm.patchValue({
        image: reader.result as string,
      });
      this.previewCover.set(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  removeImage() {
    this.newPostForm.get('image')?.setValue('');
    this.previewCover.set(null);
  }

  autoGenerateContent() {
    this.newPostForm.patchValue({
      content: generatePostContent(),
    });
  }

  onSubmit() {
    /*
    Las validaciones del form en submit no serán necesarias en este caso porque el botón submit solo se habilita cuando es válido
    Si no fuera así, sería recomendado validar 
    if (this.newPostForm.invalid) return;
    */

    /*
    En este punto a pesar de haber depurado que los valores eran correctos he tenido que hacer esta asignación porque TS me marcaba errores
    Mi primer intento (que en otras versiones de Angular me funcionaba bien), más limpio habría sido:
    const post:BlogPost = this.newPostForm.value as BlogPost;
    */

    const post: BlogPost = {
      image: this.newPostForm.get('image')?.value ?? '',
      title: this.newPostForm.get('title')?.value ?? '',
      author: this.newPostForm.get('author')?.value ?? '',
      date: this.newPostForm.get('date')?.value ?? new Date(),
      extract: this.newPostForm.get('extract')?.value ?? '',
      content: this.newPostForm.get('content')?.value ?? '',
    };

    this.bs.addPost(post);
    this.newPostForm.reset();
    this.handleNewPost.emit({ status: 'ok', error: null });
  }
}
