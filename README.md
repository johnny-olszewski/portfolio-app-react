# Portfolio App - Next.js

A modern portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion and a responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19.1.1
- **TypeScript**: 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **Animations**: Framer Motion 12.23.22
- **Icons**: React Icons 5.5.0

## 📁 Project Structure

```
portfolio-app-react/
├── public/
│   └── images/          # Static assets (images, logos)
├── src/
│   ├── app/
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── header-component/
│       ├── landing-component/
│       ├── background-component/
│       ├── about-me-component/
│       ├── experience-component/
│       ├── projects-component/
│       └── contact-component/
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Server Components**: Optimized performance with React Server Components
- **Client Components**: Interactive features with Framer Motion animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Image Optimization**: Next.js Image component for optimized images
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean and professional design with smooth animations

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for any environment-specific variables.

### Tailwind CSS

The Tailwind configuration is customized with:

- Roboto font family
- Custom color schemes
- Responsive breakpoints

### Next.js

The Next.js configuration includes:

- Image optimization settings
- React strict mode enabled
- Path aliases (`@/` for src directory)

## 📝 Customization

### Adding New Components

1. Create a new directory in `src/components/`
2. Add your component file and index.ts
3. Import and use in `src/app/page.tsx` or other pages

### Updating Content

- **Experience**: Edit `src/components/experience-component/constants.ts`
- **Projects**: Edit `src/components/projects-component/constants.ts`
- **Images**: Add to `public/images/` directory

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

Build the application:

```bash
npm run build
```

Then deploy the `.next` folder and `public` directory to your hosting provider.

## 📄 License

See LICENSE file for details.

## 👤 Author

Johnny Olszewski - Software Engineer & Builder

- Location: San Diego, CA
- Website: johnnyo.dev
