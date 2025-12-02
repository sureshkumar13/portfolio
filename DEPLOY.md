# 🚀 Deployment Guide

Easy steps to deploy your portfolio website on **GitHub Pages** or **Netlify**.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- [Node.js](https://nodejs.org/) installed (v18+)
- [Git](https://git-scm.com/) installed
- A [GitHub](https://github.com/) account
- (Optional) A [Netlify](https://netlify.com/) account

---

## 🔨 Step 1: Build Your Project

First, create the production build:

```bash
# Install dependencies (if not done already)
npm install

# Build for production
npm run build
```

This creates a `dist` folder with your optimized website.

---

## 🐙 Option A: Deploy to GitHub Pages (FREE)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it: `portfolio` (or any name you like)
3. Keep it **Public**
4. Click **Create repository**

### Step 2: Update Vite Config

Edit `vite.config.ts` and add your base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // 👈 Add this line (use your repo name)
})
```

### Step 3: Install GitHub Pages Package

```bash
npm install gh-pages --save-dev
```

### Step 4: Add Deploy Script

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 5: Push to GitHub & Deploy

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### Step 6: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**

### ✅ Your site is live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 🌐 Option B: Deploy to Netlify (EASIEST - FREE)

### Method 1: Drag & Drop (Fastest)

1. Run `npm run build` to create the `dist` folder
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag and drop** your `dist` folder
4. Done! 🎉

### Method 2: Connect to GitHub (Auto-Deploy)

1. Push your code to GitHub (see steps above)
2. Go to [app.netlify.com](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**

### ✅ Your site is live at:
```
https://random-name.netlify.app
```

### 🎯 Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the DNS setup instructions

---

## ⚡ Option C: Deploy to Vercel (FREE)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Vite - just click **Deploy**

### ✅ Your site is live at:
```
https://your-project.vercel.app
```

---

## 🔄 Updating Your Site

### GitHub Pages:
```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

### Netlify/Vercel (with GitHub):
```bash
# Just push to GitHub - auto-deploys!
git add .
git commit -m "Update portfolio"
git push
```

---

## 📁 Quick Reference

| Platform | Build Command | Output Folder | Free SSL | Custom Domain |
|----------|--------------|---------------|----------|---------------|
| GitHub Pages | `npm run build` | `dist` | ✅ | ✅ |
| Netlify | `npm run build` | `dist` | ✅ | ✅ |
| Vercel | `npm run build` | `dist` | ✅ | ✅ |

---

## 🆘 Troubleshooting

### "Page not found" on refresh?

Add this to your `dist` folder before deploying:

**For Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

**For Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Images/assets not loading?

Make sure all asset paths start with `/` in your code.

### Build fails?

```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 🎉 You're Done!

Your portfolio is now live on the internet! Share it on:
- LinkedIn
- Your resume
- Job applications

**Good luck with your job search!** 💼

---

*Last updated: November 2025*
