import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Veha0001",
  description: "A VitePress Site",
  rewrites: {
    "en/:rest*": ":rest*",
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  sitemap: {
    hostname: "https://veha0001.github.io",
  },
  base: "/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: "dark",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    ["meta", { name: "theme-color", content: "#1e1e2e" }],
    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@Veha0001" }],
    ["meta", { name: "twitter:title", content: "Veha0001" }],
    ["meta", { name: "twitter:description", content: "Veha Github Site" }],
    [
      "meta",
      { name: "twitter:image", content: "https://github.com/Veha0001.png" },
    ],
    // Open Graph
    ["meta", { property: "og:title", content: "Veha0001" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://veha0001.github.io" }],
    [
      "meta",
      { property: "og:image", content: "https://github.com/Veha0001.png" },
    ],
    ["meta", { property: "og:description", content: "Veha0001, Github Site." }],
    ["meta", { property: "og:site_name", content: "Veha0001" }],
    ["meta", { property: "og:locale", content: "en_US" }],
    // author discription keywords
    ["meta", { name: "author", content: "Veha0001" }],
    [
      "meta",
      {
        name: "keywords",
        content: "Veha0001, VitePress, Documentation, Web Development, Khmer",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "Veha0001's VitePress site for documentation and examples.",
      },
    ],
    [
      "script",
      { type: "application/ld+json" },
      `
    { 
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Veha0001", 
      "url": "https://veha0001.github.io",
      "description": "Veha0001's VitePress site for documentation and examples.",
      "publisher": {
        "@type": "Organization",
        "name": "Veha0001",
        "logo": {
          "@type": "ImageObject",
          "url": "https://github.com/Veha0001.png"
        }
      }
    }
  `,
    ],
  ],
  themeConfig: {
    logo: { src: "/favicon.ico", width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "/home", link: "/" },
      //{ text: "Examples", link: "/markdown-examples" },
      { text: "/dev", link: "/dev" },
      { text: "/user", link: "/user" },
    ],

    sidebar: [
      {
        text: "Overview Pages",
        items: [
          { text: "How to Watch Anime in Asia", link: "/howtowatchanime" },
          //{ text: "Markdown Examples", link: "/markdown-examples" },
          //{ text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Veha0001" },
      { icon: "youtube", link: "https://www.youtube.com/@Veha0001" },
      { icon: "kofi", link: "https://ko-fi.com/Veha0001" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/Veha0001/veha0001.github.io/blob/main/LICENSE">Apache License 2.0</a>',
      copyright: "Copyright © 2025-present</a>",
    },
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    kh: {
      label: "Khmer",
      lang: "kh",
      link: "/kh",
    },
  },
});
