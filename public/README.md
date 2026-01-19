# Public Folder

This folder contains static assets that are served directly by Next.js.

## Folder Structure

```
public/
├── images/
│   ├── hero/          # Hero section background images
│   ├── logos/         # Company logos and brand assets
│   ├── partners/      # Partnership badges and partner logos
│   └── general/       # General purpose images
```

## Usage

In Next.js, files in the `public` folder are served from the root URL.

### Examples:

- `/images/hero/hero-background.jpg` → Access at `http://localhost:3000/images/hero/hero-background.jpg`
- `/images/logos/logo.png` → Access at `http://localhost:3000/images/logos/logo.png`
- `/images/partners/microsoft-logo.png` → Access at `http://localhost:3000/images/partners/microsoft-logo.png`

### In Components:

```tsx
import Image from "next/image";

<Image
  src="/images/hero/hero-background.jpg"
  alt="Description"
  width={1920}
  height={1080}
/>
```

## Image Guidelines

- Use optimized formats: WebP, AVIF when possible
- Compress images before adding (use tools like TinyPNG, ImageOptim)
- Recommended sizes:
  - Hero images: 1920x1080px or larger
  - Logos: 200-400px width
  - Partner badges: 150-300px width
- Always include descriptive alt text for accessibility
