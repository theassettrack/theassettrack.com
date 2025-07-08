#!/bin/bash

# Auto-deploy script for AssetTrack website
echo "🚀 AssetTrack Auto-Deploy Script"
echo "================================="

# Navigate to project directory
cd /Users/ilyasavelyeu/Documents/Code/Assettrack-site/theassettrack-site

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found. Installing..."
    brew install gh
fi

# Initialize git
echo "📁 Initializing Git..."
git init

# Add all files
echo "📦 Adding files..."
git add .

# Commit
echo "💾 Creating commit..."
git commit -m "Initial commit: AssetTrack website ready for deployment"

# Set main branch
git branch -M main

# Authenticate and create repo (will prompt for credentials)
echo "🔐 Authenticating with GitHub..."
echo "Please follow the prompts to authenticate"

# Create repository and push
echo "📤 Creating repository and pushing..."
gh repo create theassettrack/theassettrack.com --public --source=. --push

echo "✅ Deployment completed!"
echo "🌐 Repository: https://github.com/theassettrack/theassettrack.com"
echo "📋 Next: Enable GitHub Pages in repository settings"