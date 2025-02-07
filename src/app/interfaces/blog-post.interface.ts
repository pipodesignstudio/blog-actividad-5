export interface BlogPost {
    title:string;
    image:string;
    extract:string;
    date:number; // Suelo manejarlo con formato de epoch;
    content: string;
    author: string;
}