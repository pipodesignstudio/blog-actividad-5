import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChangeThemeBtnComponent } from "./components/change-theme-btn/change-theme-btn.component";
import { BlogService } from './services';
import { BlogPost } from './interfaces';
import { BlogListComponent } from "./components/blog-list/blog-list.component";
import { DialogModule } from 'primeng/dialog';
import { NewPostFormComponent } from "./components/new-post-form/new-post-form.component";
import { BlogLoadingComponent } from './components/blog-loading/blog-loading.component';


@Component({
  selector: 'app-root',
  imports: [ButtonModule, BlogLoadingComponent, DividerModule, ChangeThemeBtnComponent, BlogListComponent, DialogModule, NewPostFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Actividad 5 - Blog';

  private bs = inject(BlogService);
  public posts:BlogPost[] = [];
  public isLoading = signal<boolean>(true);
  public showingNewPostModal = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.posts = this.bs.getPosts();
      this.isLoading.set(false);
    }, 1000) // Añado un segundo para simular un fecth a BBDD y mostrar pantalla de carga 
  }

  onNewPost(event:{status:'ok' | 'ko', error:string|null}) {
    if(event.status === 'ok') {
      this.showingNewPostModal = false;
      this.posts = this.bs.getPosts();
    } else {
      console.error('Error al crear el post:', event.error);
    }
  }

}
