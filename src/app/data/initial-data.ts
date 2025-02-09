import { BlogPost } from "../interfaces";
import { fakeContent } from "../utils/fake-content-injector";

export const initialData:BlogPost[] = [
    {
        title: "What's new in Astro - January 2025",
        image: "https://astro.build/_astro/whats-new-shared.-IVrxKgH_1pI1fm.webp",
        extract: "January 2025 - Starting the year off with a bang!",
        date: new Date('Mon Feb 10 2025 00:00:00 GMT+0100 (hora estándar de Europa central'), 
        content: fakeContent(),
        author: "Sarah Rainsberger"
    },
    {
        title: "Astro 5.2",
        image: "https://astro.build/_astro/blog-post-5-2.CRLldXCu_Z4B8KA.webp",
        extract: "Astro 5.2 is now available! The first minor release of 2025 includes Tailwind 4 support, a new way to access config values in your pages, better trailing slash handling, and support for external redirects.",
        date: new Date('Mon Feb 10 2025 00:00:00 GMT+0100 (hora estándar de Europa central'), 
        content: fakeContent(),
        author: "Emanuele Stoppa"
    },
    {
        title: "2024 year in review",
        image: "https://astro.build/_astro/blog-post-2024-in-review.D4FDAWRf_Z2p6suE.webp",
        extract: "In this post, I’ll summarize what I see as the most significant happenings in the Astro ecosystem in 2024. I’ll also touch on what might be coming in 2025, as far as I’m aware.",
        date: new Date('Mon Feb 10 2025 00:00:00 GMT+0100 (hora estándar de Europa central'), 
        content: fakeContent(),
        author: "Shinya Fujino"
    },
    {
        title: "Google IDX: Our Official Online Editor Partner",
        image: "https://astro.build/_astro/astro-idx-header.B3qNYXiL_Z1n2WAe.webp",
        extract: "We are excited to announce our new partnership with Google IDX, who will be joining as Astro’s Official Online Editor Partner. IDX is an AI-assisted workspace for full-stack, multi-platform app development in the cloud.",
        date: new Date('Mon Feb 10 2025 00:00:00 GMT+0100 (hora estándar de Europa central'), 
        content: fakeContent(),
        author: "Thuy Doan"
    },
];