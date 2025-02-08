import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
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
  @ViewChild('imagePicker') imagePicker!: ElementRef<HTMLInputElement>;


  private fb = inject(FormBuilder);
  private bs = inject(BlogService);
  private cd = inject(ChangeDetectorRef);

  public selectedCoverImage = signal<string | null>(null);

  public newPostForm = this.fb.group({
    image: [ '', Validators.required],
    title: ['', [Validators.required, Validators.minLength(5)]],
    author: ['', [Validators.required, Validators.minLength(5)]],
    date: [, [Validators.required]],
    extract: ['', [Validators.required, Validators.minLength(120)]],
    content: ['', [Validators.required, Validators.minLength(150)]],
  });
  
  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files?.length) return;
  
    const file = target.files[0];

    
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.newPostForm.patchValue({
        image: reader.result as string,
      });
    }

  }

  removeImage() {
    this.newPostForm.get('image')?.setValue(''); // Limpia el control de imagen
    this.selectedCoverImage.set(null);
    if (this.imagePicker) {
      this.imagePicker.nativeElement.value = ''; // Reset del input file
    }
  }


  onSubmit() {}

}
