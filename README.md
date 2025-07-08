# AssetTrack Website

Professional fleet management website built with modern React 19, TypeScript, and TailwindCSS. Complete pixel-perfect rebuild of the original AssetTrack website with enhanced performance and functionality.

🌐 **Live Site**: https://theassettrack.com/

## ✨ Features

- **React 19** with TypeScript for type safety and modern development
- **TanStack Router** for file-based routing with full type safety
- **TailwindCSS v4** with custom design tokens matching original brand
- **Vite 6** for lightning-fast development and optimized production builds
- **Cal.com Integration** with inline booking modals (not new tabs)
- **Fully Responsive** design optimized for mobile, tablet, and desktop
- **SEO Optimized** with comprehensive meta tags and structured data
- **Performance Optimized** with <400KB total bundle size
- **Automated Deployment** via GitHub Actions to GitHub Pages

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
├── .github/workflows/          # GitHub Actions deployment automation
├── apps/web/                   # Main React application
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── ui/            # Reusable UI components
│   │   │   └── __tests__/     # Component tests
│   │   ├── routes/            # TanStack Router pages
│   │   ├── types/             # TypeScript definitions
│   │   └── lib/               # Utilities and helpers
│   ├── public/                # Static assets
│   │   ├── images/            # Optimized images and partner logos
│   │   ├── videos/            # MP4 video content
│   │   └── patterns/          # SVG background patterns
│   └── vite.config.ts         # Vite configuration with GitHub Pages setup
└── README.md                  # Project documentation
```

## 🚀 Deployment

**Already deployed and live!** 🎉

### Live URLs:
- **Production Site**: https://theassettrack.com/
- **Repository**: https://github.com/theassettrack/theassettrack.com
- **Deployment Status**: https://github.com/theassettrack/theassettrack.com/actions

### Automated Deployment:
- ✅ **GitHub Actions** configured for automatic deployment
- ✅ **GitHub Pages** enabled with workflow source
- ✅ **Production builds** triggered on every push to `main`
- ✅ **Optimized assets** generated automatically

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

## 📊 Performance Metrics

### Bundle Analysis:
- **JavaScript**: 348KB (108KB gzipped) ⚡
- **CSS**: 47KB (8.9KB gzipped) 🎨
- **HTML**: 3.6KB (1.2KB gzipped) 📄
- **Total Bundle**: <400KB (optimized) 🚀

### Optimization Features:
- ✅ **SVG Logos**: Vector graphics for crisp partner logos
- ✅ **WebP Images**: Modern format for photos and hero content  
- ✅ **Code Splitting**: Optimized chunk loading
- ✅ **Tree Shaking**: Unused code elimination
- ✅ **CSS Purging**: Minimal CSS footprint
- ✅ **Asset Optimization**: Compressed and minified resources

### Expected Lighthouse Scores:
- **Performance**: 95+ ⚡
- **Accessibility**: 90+ ♿
- **Best Practices**: 95+ ✅
- **SEO**: 100 🔍

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **🌐 Live Site**: https://theassettrack.com/
- **📱 Original Design**: Based on theassettrack.com
- **⚙️ Built With**: [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack)
- **📚 Documentation**: See this README for complete setup guide

---

**Built with ❤️ using modern web technologies for optimal performance and user experience.**
