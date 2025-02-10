import { Injectable } from '@angular/core';
import { initialData } from '../data/initial-data';
import { BlogPost } from '../interfaces';

@Injectable({providedIn: 'root'})
export class BlogService {

    private readonly _sk = 'posts'; // sk por Storage Key

    constructor() {
        // Al ser un singleton llamo a este método privado aquí en vez del constructor del componente para evitar que se recargue con el componente. 
        this.seedAndStoreData();
    }
    
    private seedAndStoreData() {
        if (!localStorage.getItem(this._sk)) { 
            const posts:BlogPost[] = initialData;
            localStorage.setItem(this._sk, JSON.stringify(posts));
        }
    }

    getPosts(): BlogPost[] {
        const posts = localStorage.getItem(this._sk);
        return posts ? JSON.parse(posts) as BlogPost[] : [];
      }
    
      addPost(post: BlogPost): void {
        const posts = this.getPosts();
        posts.unshift(post);
        localStorage.setItem(this._sk, JSON.stringify(posts));
      }

    
}