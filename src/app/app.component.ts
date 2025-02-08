import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ChangeThemeBtnComponent } from "./components/change-theme-btn/change-theme-btn.component";
import { BlogService } from './services';
import { BlogPost } from './interfaces';
import { BlogListComponent } from "./components/blog-list/blog-list.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, DividerModule, ChangeThemeBtnComponent, BlogListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Actividad 5 - Blog';

  private bs = inject(BlogService);
  public posts:BlogPost[] = [];
  public isLoading = signal<boolean>(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.posts = this.bs.getPosts();
    }, 1000) // Añado un segundo para simular un fecth a BBDD y mostrar pantalla de carga 
  }

}
