 

A Next.js project following comprehensive coding standards and patterns.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy environment variables:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── fade-in-section.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   └── contact-form.tsx
├── hooks/                 # Custom React hooks
│   ├── use-window-size.ts
│   ├── use-debounce.ts
│   ├── use-local-storage.ts
│   └── use-scroll-position.ts
├── lib/                   # Utility functions
│   ├── debounce.ts
│   ├── throttle.ts
│   ├── logger.ts
│   ├── error-logger.ts
│   ├── sanitize.ts
│   └── config.ts
├── contexts/              # React Context providers
│   └── theme-context.tsx
├── constants/            # Constants and data
│   └── index.ts
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

This project follows comprehensive coding standards covering:

### Tailwind CSS Patterns
- Arbitrary values for precise control
- Mobile-first responsive design
- Consistent rem-based spacing system
- Custom font families with square brackets
- RGBA colors with opacity
- Multi-layer shadows
- Rem-based border radius

### Component Patterns
- Client components with "use client" directive
- React hooks (useState, useEffect, useRef, useId, useMemo, useCallback, useReducer)
- Custom hooks (useWindowSize, useDebounce, useLocalStorage)
- React.memo for performance
- Context API with custom hooks
- Error boundaries & Suspense
- Data fetching patterns (Server Components preferred)
- Form validation (react-hook-form + Zod)
- Keyboard event handling
- Scroll handling
- Debouncing & throttling
- Framer Motion animations
- Portal pattern for modals
- Constants outside components
- Dynamic imports & code splitting
- Async Server Components
- Loading & error states
- Performance monitoring
- SEO & metadata
- Accessibility (a11y)
- Button vs Link distinction

### TypeScript Patterns
- Interfaces for complex types
- Union types for fixed values
- Optional props with `?`

### Security Patterns
- XSS prevention (DOMPurify)
- No console.logs in production
- No sensitive data in localStorage
- External link security
- Source maps disabled in production
- Generic error messages
- CSP headers configured

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run audit` - Security audit
- `npm run audit:fix` - Fix security vulnerabilities
- `npm run security:check` - Check security and outdated packages

## 📝 Key Patterns

### FadeInSection Wrapper
Wrap all scroll-animated content:
```tsx
<FadeInSection className="mt-32 mx-[2rem] md:mx-[4.5rem]">
  <h1>Content</h1>
</FadeInSection>
```

### Section Heading Pattern
```tsx
<div className="flex flex-row items-center gap-8 justify-center mt-24">
  <div className="flex w-[6.875rem] items-center">
    <div className="w-[6.25rem] h-[1px] bg-[linear-gradient(90deg,rgba(242,240,245,0)_0%,#F2F0F5_100%)]" />
    <div className="h-1 w-1 rounded-full bg-white" />
  </div>
  <h1 className="font-['Inter'] text-5xl font-bold tracking-[-0.06em]">
    Section Title
  </h1>
  <div className="flex w-[6.875rem] items-center">
    <div className="h-1 w-1 rounded-full bg-white" />
    <div className="w-[6.25rem] h-[1px] bg-[linear-gradient(270deg,rgba(242,240,245,0)_0%,#F2F0F5_100%)]" />
  </div>
</div>
```

### Light Container Pattern
```tsx
<FadeInSection className="light-container py-20 px-[4.5rem] mt-16 relative overflow-hidden">
  <div className="content">...</div>
</FadeInSection>
```

### Form Pattern
```tsx
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(formSchema),
});
```

## 🔒 Security

- Content Security Policy (CSP) headers configured
- XSS prevention with DOMPurify
- No sensitive data in browser storage
- Source maps disabled in production
- Console.logs removed in production
- External links with `rel="noopener noreferrer"`

## 🎯 Color Scheme

- Primary: `#f5cd4c`
- Background: `#f0e9d3`
- Text: `#000000`

## 📚 Documentation

For complete coding standards, see the comprehensive documentation in the project standards.

## 🤝 Contributing

Follow all coding standards and patterns defined in the project documentation.
