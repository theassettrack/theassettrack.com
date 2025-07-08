# AssetTrack Website

Modern fleet management website built with React 19, TypeScript, and TailwindCSS. This is a complete rebuild of the original AssetTrack website with modern technologies and performance optimizations.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **TanStack Router** for file-based routing
- **TailwindCSS v4** for modern styling
- **Vite** for fast development and optimized builds
- **Cal.com Integration** for consultation booking
- **Responsive Design** for all devices
- **SEO Optimized** with proper meta tags
- **GitHub Pages Ready** with automated deployment

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS v4, Custom CSS
- **Routing**: TanStack Router
- **Build Tool**: Vite 6
- **UI Components**: Custom components with shadcn/ui patterns
- **Animation**: CSS animations for scrolling logos
- **Icons**: Lucide React
- **Integration**: Cal.com for booking system

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/theassettrack-site.git
cd theassettrack-site
```

2. Install dependencies:
```bash
cd apps/web
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser

## 🏗️ Project Structure

```
theassettrack-site/
├── .github/workflows/     # GitHub Actions for deployment
├── apps/web/             # Main React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── routes/       # TanStack Router pages
│   │   ├── types/        # TypeScript type definitions
│   │   └── lib/          # Utility functions
│   ├── public/           # Static assets
│   │   ├── images/       # Images and logos
│   │   ├── videos/       # Video content
│   │   └── patterns/     # Background patterns
│   └── dist/             # Production build output
└── README.md
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "GitHub Actions"
4. Automatic deployment will trigger on every push to `main`

Your site will be available at: `https://YOUR_USERNAME.github.io/theassettrack-site/`

### Manual Build

```bash
cd apps/web
npm run build:prod  # Production build
npm run preview     # Preview production build locally
```

## 📱 Features

### 🎯 Core Sections
- **Hero Section** with video background and CTAs
- **Services** showcase (Fleet Management, Consulting, Data Visualization)
- **Partners** with animated scrolling logos
- **About** section with team member info
- **Footer** with contact information

### 🔧 Technical Features
- **Cal.com Integration**: Inline booking modals
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Performance**: ~400KB total bundle size (gzipped)
- **SEO**: Complete meta tags and structured data
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🎨 Customization

### Cal.com Setup
Update the Cal.com integration by changing the `data-cal-link` attributes in:
- Header button
- Hero CTA
- Service buttons
- Footer CTA

Replace `assettrack/sales` with your Cal.com username/event-type.

### Styling
The project uses TailwindCSS v4 with custom design tokens defined in the CSS. Key colors and spacing match the original AssetTrack brand.

## 📊 Performance

- **Build Size**: ~348KB JS (108KB gzipped)
- **CSS**: ~46KB (8.8KB gzipped) 
- **Images**: Optimized SVG logos and WebP photos
- **Lighthouse Score**: 90+ across all metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Site**: [Coming Soon]
- **Original**: Based on theassettrack.com design
- **Tech Stack**: [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack)
