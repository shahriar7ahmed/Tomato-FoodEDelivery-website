# Tomato-FoodEDelivery-website

A modern food delivery website built with React and Vite.

## 🚀 Deployment to Vercel

This project is ready to deploy on Vercel. Follow these steps:

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   - Make sure your code is in a Git repository

2. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com/)
   - Sign in or create an account
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect the Vite framework
   - Click "Deploy"

That's it! Vercel will automatically:
- Install dependencies (`npm install`)
- Build your project (`npm run build`)
- Deploy to production

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

## 📋 Configuration

The `vercel.json` file is configured with:
- SPA routing: All routes redirect to `index.html` for React Router

Vercel automatically detects:
- **Framework**: Vite
- **Build Command**: `npm run build` (from package.json)
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Important Notes

- The app uses React Router for client-side routing
- All routes are configured to redirect to `index.html` for proper SPA behavior
- No environment variables are required for basic deployment

## 🌐 Custom Domain

To add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions