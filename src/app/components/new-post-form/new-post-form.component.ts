import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BlogService } from '../../services';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-new-post-form',
  imports: [FormsModule, ReactiveFormsModule, ButtonModule, MessageModule, TextareaModule, InputTextModule, DatePickerModule],
  templateUrl: './new-post-form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPostFormComponent { 

  private fb = inject(FormBuilder);
  private bs = inject(BlogService);

  public selectedCoverImag:string | null = null;

  public newPostForm = this.fb.group({
    image: [, Validators.required],
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required, Validators.minLength(5)]],
    date: [, [Validators.required]],
    extract: ['', [Validators.required, Validators.minLength(120)]],
    content: ['', [Validators.required, Validators.minLength(150)]],
  });
  
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    console.log(this.newPostForm.value)
  }


  onSubmit() {}

}
