#!/bin/bash

# AssetTrack Website Deployment Script
echo "🚀 Starting AssetTrack website deployment..."

# Navigate to project directory
cd /Users/ilyasavelyeu/Documents/Code/Assettrack-site/theassettrack-site

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit changes
echo "💾 Creating commit..."
git commit -m "AssetTrack website ready for deployment

- Modern React 19 + TypeScript implementation
- TailwindCSS v4 styling with exact design match
- Cal.com integration for consultation booking
- Optimized performance (~400KB total bundle)
- Responsive design for all devices
- SEO optimized with meta tags
- GitHub Pages ready with automated deployment"

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Add remote origin (if not already added)
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/theassettrack/theassettrack.com.git
fi

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
echo "Note: You may be prompted for GitHub credentials"
git push -u origin main

echo "✅ Deployment script completed!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to: https://github.com/theassettrack/theassettrack.com"
echo "2. Navigate to Settings → Pages"
echo "3. Set Source to 'GitHub Actions'"
echo "4. Your site will be live at: https://theassettrack.github.io/theassettrack.com/"
echo ""
echo "🎉 Your AssetTrack website is ready!"