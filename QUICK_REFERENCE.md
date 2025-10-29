# Quick Reference Guide - Next.js Portfolio

## 🚀 Essential Commands

| Command         | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `npm run dev`   | Start development server (http://localhost:3000) |
| `npm run build` | Create production build                          |
| `npm run start` | Run production build locally                     |
| `npm run lint`  | Check for code issues                            |

## 📁 Where Things Are

| Old Location (Vite) | New Location (Next.js) |
| ------------------- | ---------------------- |
| `src/App.tsx`       | `src/app/page.tsx`     |
| `src/pages/main/`   | `src/components/`      |
| `src/assets/`       | `public/images/`       |
| `src/index.css`     | `src/app/globals.css`  |

## 🖼️ Image Usage

**Before (Vite):**

```tsx
import logo from "../assets/logo.png";
<img src={logo} alt="Logo" />;
```

**After (Next.js):**

```tsx
import Image from "next/image";
<Image src="/images/logo.png" width={200} height={100} alt="Logo" />;
```

## 🔗 Navigation

**Create a Link:**

```tsx
import Link from "next/link";

<Link href="/blog">Go to Blog</Link>;
```

## 📄 Create New Page

1. Create file: `src/app/pagename/page.tsx`
2. Add content:

```tsx
export default function PageName() {
  return <div>Your content</div>;
}
```

## 🎨 Add Client Component

For components using hooks, animations, or browser APIs:

```tsx
"use client"; // Add this at the top

import { useState } from "react";

export default function MyComponent() {
  const [state, setState] = useState(0);
  return <div onClick={() => setState(state + 1)}>{state}</div>;
}
```

## 🌐 API Routes

Create file: `src/app/api/endpoint/route.ts`

```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ success: true });
}
```

## 🎯 Import Paths

Use the `@/` alias for cleaner imports:

```tsx
// Instead of:
import Component from "../../../components/Component";

// Use:
import Component from "@/components/Component";
```

## 🎨 Tailwind Classes

Already configured! Just use classes:

```tsx
<div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>
```

## 📊 SEO / Metadata

In any page file:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function Page() {
  return <div>Content</div>;
}
```

## 🔧 Environment Variables

1. Create `.env.local` file
2. Add variables (prefix with `NEXT_PUBLIC_` for client-side):

```
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

3. Use in code:

```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 🐛 Troubleshooting

| Problem             | Solution                                          |
| ------------------- | ------------------------------------------------- |
| Port 3000 in use    | Next.js will auto-use 3001, or kill the process   |
| Changes not showing | Hard refresh (Cmd+Shift+R) or restart dev server  |
| Build fails         | Check terminal for errors, run `npm run lint`     |
| Images not loading  | Check path starts with `/images/` and file exists |
| "use client" error  | Add `"use client"` directive at top of file       |

## 🚀 Deploy to Vercel

**Fastest way:**

```bash
npm install -g vercel
vercel
```

**Or via GitHub:**

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy (automatic!)

## 📚 Documentation

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- React Docs: https://react.dev
- Framer Motion: https://www.framer.com/motion

---

**Need more details?** Check `NEXT_STEPS.md` or `MIGRATION_SUMMARY.md`
