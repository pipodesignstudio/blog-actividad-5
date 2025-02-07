import { BlogPost } from "../interfaces";
import { fakeContent } from "../utils/fake-content-injector";

export const initialData:BlogPost[] = [
    {
        title: "What's new in Astro - January 2025",
        image: "https://astro.build/_astro/whats-new-shared.-IVrxKgH_1pI1fm.webp",
        extract: "Extracto 1",
        date: 1631344000, 
        content: fakeContent(),
        author: "Sarah Rainsberger"
    },
    {
        title: "Astro 5.2",
        image: "https://astro.build/_astro/blog-post-5-2.CRLldXCu_Z4B8KA.webp",
        extract: "Astro 5.2 is now available! The first minor release of 2025 includes Tailwind 4 support, a new way to access config values in your pages, better trailing slash handling, and support for external redirects.",
        date: 1631430400, 
        content: fakeContent(),
        author: "Emanuele Stoppa"
    },
    {
        title: "Astro 5.2",
        image: "https://astro.build/_astro/blog-post-5-2.CRLldXCu_Z4B8KA.webp",
        extract: "Astro 5.2 is now available! The first minor release of 2025 includes Tailwind 4 support, a new way to access config values in your pages, better trailing slash handling, and support for external redirects.",
        date: 1677801600, 
        content: fakeContent(),
        author: "Emanuele Stoppa"
    },
    {
        title: "Astro 5.2",
        image: "https://astro.build/_astro/blog-post-5-2.CRLldXCu_Z4B8KA.webp",
        extract: "Astro 5.2 is now available! The first minor release of 2025 includes Tailwind 4 support, a new way to access config values in your pages, better trailing slash handling, and support for external redirects.",
        date: 1728345600, 
        content: fakeContent(),
        author: "Emanuele Stoppa"
    },
];