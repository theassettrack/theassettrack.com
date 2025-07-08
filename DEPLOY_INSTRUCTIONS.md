# 🚀 Deploy Instructions

## Step 1: Initialize Git and Add Files

```bash
cd /Users/ilyasavelyeu/Documents/Code/Assettrack-site/theassettrack-site

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: AssetTrack website ready for deployment"
```

## Step 2: Connect to GitHub Repository

```bash
# Set main branch
git branch -M main

# Add remote origin
git remote add origin https://github.com/theassettrack/theassettrack.com.git

# Push to GitHub (will require authentication)
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to: https://github.com/theassettrack/theassettrack.com
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Save settings

## Step 4: Verify Deployment

- After pushing, GitHub Actions will automatically build and deploy
- Check deployment status in the **"Actions"** tab
- Your site will be live at: **https://theassettrack.github.io/theassettrack.com/**

## 🔐 Authentication

When pushing to GitHub, you'll need to authenticate using one of these methods:

### Option A: Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with repo permissions
3. Use token as password when prompted

### Option B: SSH Key
1. Generate SSH key: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Use SSH URL: `git remote set-url origin git@github.com:theassettrack/theassettrack.com.git`

### Option C: GitHub CLI
```bash
# Install GitHub CLI first
gh auth login
git push -u origin main
```

## ✅ What Happens After Deployment

- **Automatic builds** on every push to main
- **Optimized production bundle** (~400KB total)
- **Cal.com integration** ready to use
- **SEO optimized** with proper meta tags
- **Mobile responsive** design
- **Fast loading** with optimized assets

Your AssetTrack website will be live and fully functional! 🎉