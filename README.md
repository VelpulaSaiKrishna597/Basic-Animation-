## Scroll-Driven Hero Section Animation

This project implements the **scroll-driven hero section animation** assignment using **Next.js**, **React**, **Tailwind CSS**, and **GSAP**.

### Tech stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + Tailwind CSS 3
- **Animation**: GSAP 3 + ScrollTrigger

### Features implemented

- **Hero section layout**
  - Full viewport hero with a letter-spaced headline: `WELCOME ITZ FIZZ`.
  - Impact metrics / statistics displayed under the headline.
- **Initial load animation (GSAP timeline)**
  - Headline letters fade in and slide up with a staggered reveal.
  - Statistic cards animate in one by one with subtle delay.
- **Scroll-based animation (GSAP ScrollTrigger)**
  - Main hero visual card moves with scroll using `translate`, `scale`, and `rotate` transforms.
  - Motion is tied directly to scroll progress using `scrub`, not time-based autoplay.
  - Stats block has a parallax-style counter movement for added depth.
- **Performance**
  - Only transform properties are animated (`yPercent`, `scale`, `rotate`).
  - GSAP ScrollTrigger manages scroll handling efficiently.

### Getting started locally

1. **Install dependencies**

   ```bash
   cd c:\Cursor\Assignment
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Then open `http://localhost:3000` in your browser.

### Building and static export

This project is configured with `output: 'export'` in `next.config.mjs` so it can be hosted on static hosting such as GitHub Pages.

```bash
npm run build
```

The static site will be exported into the `out` folder.

### Deploying to GitHub Pages

1. **Create a new GitHub repository**

   - Initialize a new repo and push this folder contents to it.

2. **Adjust `next.config.mjs` for a non-root path (if needed)**

   If you deploy to `https://<username>.github.io/<repo-name>`, update `next.config.mjs`:

   ```ts
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     },
     basePath: '/<repo-name>',
     assetPrefix: '/<repo-name>/'
   };
   ```

3. **Build the site**

   ```bash
   npm run build
   ```

4. **Push the `out` folder to the `gh-pages` branch**

   A simple approach:

   ```bash
   git add .
   git commit -m "Add scroll-driven hero assignment"
   git push origin main

   npm run build

   git subtree push --prefix out origin gh-pages
   ```

5. **Enable GitHub Pages**

   - In your repo settings, go to **Pages**.
   - Set source to `gh-pages` branch, root folder.
   - Save; GitHub will give you the live URL.

### Where to look in the code

- **Hero layout + animations**: `app/page.tsx`
- **Global styles & Tailwind directives**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Next.js export config for GitHub Pages**: `next.config.mjs`
